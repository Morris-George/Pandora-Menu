// The staff Inbox for the store the token belongs to - never any other store. The "All stores" sign-in sees every store (list ids then carry the store: "Store|date:number").
//   GET /api/inbox?v=<version>   (Authorization: Bearer <token>)  ->  {ok, store, v, orders:[...]}  or {ok, unchanged:true} when nothing changed
//   GET /api/inbox?view=done[&from=<ms>&to=<ms>]  ->  finished lists in that finish-time window, newest first (kept 30 days, max 200)
const { redis, send, tokenStore, pad3, ALL, scope } = require('./_lib');

module.exports = async function handler(req, res) {
  const who = tokenStore(req);
  if (!who) return send(res, 401, { ok: false, error: 'locked' });
  const stores = scope(who), multi = who === ALL;
  const shape = (o, st) => ({ id: multi ? st + '|' + o.id : o.id, store: st, number: pad3(o.n), name: o.name, phone: o.phone, items: o.items, itemCount: o.itemCount, total: o.total, status: o.status, at: o.at, servingAt: o.servingAt || null, doneAt: o.doneAt || null });
  try {
    let q; try { q = new URL(req.url, 'http://x').searchParams; } catch (e) { q = new URLSearchParams(); }

    if (q.get('view') === 'done') {
      const num = (k, d) => { const x = Number(q.get(k)); return q.get(k) && Number.isFinite(x) ? x : d; };
      const from = Math.max(0, num('from', 0)), to = num('to', Infinity);
      let orders = [];
      for (const store of stores) {
        const ids = await redis(['ZREVRANGEBYSCORE', `pm:d:${store}`, to === Infinity ? '+inf' : String(to), String(from), 'LIMIT', 0, 200]); // by the time each list was finished
        if (!ids || !ids.length) continue;
        const vals = await redis(['MGET', ...ids.map(id => `pm:o:${store}:${id}`)]);
        for (let i = 0; i < ids.length; i++) {
          if (!vals[i]) { await redis(['ZREM', `pm:d:${store}`, ids[i]]); continue; } // expired after 30 days
          const o = JSON.parse(vals[i]);
          if (o.store !== store || o.status !== 'done') continue;
          orders.push(shape(o, store));
        }
      }
      if (multi) orders = orders.sort((a, b) => (b.doneAt || b.at) - (a.doneAt || a.at)).slice(0, 200);
      return send(res, 200, { ok: true, store: who, orders });
    }

    // One cheap read first: the change counter(s). If the tablet already has this version, nothing else is read.
    const counters = await Promise.all(stores.map(s => redis(['GET', `pm:v:${s}`])));
    const v = multi ? counters.map(c => String(c || '0')).join('.') : String(counters[0] || '0');
    if ((q.get('v') || '') === v) return send(res, 200, { ok: true, store: who, v, unchanged: true });
    const orders = [];
    for (const store of stores) {
      const ids = await redis(['ZRANGE', `pm:a:${store}`, 0, 199]);
      if (!ids || !ids.length) continue;
      const vals = await redis(['MGET', ...ids.map(id => `pm:o:${store}:${id}`)]);
      for (let i = 0; i < ids.length; i++) {
        if (!vals[i]) { await redis(['ZREM', `pm:a:${store}`, ids[i]]); continue; } // expired after 30 days
        const o = JSON.parse(vals[i]);
        if (o.store !== store || o.status === 'done') continue;
        orders.push(shape(o, store));
      }
    }
    return send(res, 200, { ok: true, store: who, v, orders });
  } catch (e) {
    return send(res, e.status || 502, { ok: false, error: 'Could not load the Inbox.' });
  }
};
