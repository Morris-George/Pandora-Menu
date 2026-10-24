// The staff Inbox for the store the token belongs to - never any other store.
//   GET /api/inbox?v=<version>   (Authorization: Bearer <token>)  ->  {ok, store, v, orders:[...]}  or {ok, unchanged:true} when nothing changed
//   GET /api/inbox?view=done[&from=<ms>&to=<ms>]  ->  the store's finished lists in that finish-time window, newest first (kept 30 days, max 200)
const { redis, send, tokenStore, pad3 } = require('./_lib');

const shape = o => ({ id: o.id, number: pad3(o.n), name: o.name, phone: o.phone, items: o.items, itemCount: o.itemCount, total: o.total, status: o.status, at: o.at, servingAt: o.servingAt || null, doneAt: o.doneAt || null });

module.exports = async function handler(req, res) {
  const store = tokenStore(req);
  if (!store) return send(res, 401, { ok: false, error: 'locked' });
  try {
    let q; try { q = new URL(req.url, 'http://x').searchParams; } catch (e) { q = new URLSearchParams(); }

    if (q.get('view') === 'done') {
      const num = (k, d) => { const x = Number(q.get(k)); return q.get(k) && Number.isFinite(x) ? x : d; };
      const from = Math.max(0, num('from', 0)), to = num('to', Infinity);
      const ids = await redis(['ZREVRANGEBYSCORE', `pm:d:${store}`, to === Infinity ? '+inf' : String(to), String(from), 'LIMIT', 0, 200]); // by the time each list was finished
      const orders = [];
      if (ids && ids.length) {
        const vals = await redis(['MGET', ...ids.map(id => `pm:o:${store}:${id}`)]);
        for (let i = 0; i < ids.length; i++) {
          if (!vals[i]) { await redis(['ZREM', `pm:d:${store}`, ids[i]]); continue; } // expired after 30 days
          const o = JSON.parse(vals[i]);
          if (o.store !== store || o.status !== 'done') continue;
          orders.push(shape(o));
        }
      }
      return send(res, 200, { ok: true, store, orders });
    }

    // One cheap read first: the store's change counter. If the tablet already has this version, nothing else is read.
    const v = String((await redis(['GET', `pm:v:${store}`])) || '0');
    if ((q.get('v') || '') === v) return send(res, 200, { ok: true, store, v, unchanged: true });
    const ids = await redis(['ZRANGE', `pm:a:${store}`, 0, 199]);
    const orders = [];
    if (ids && ids.length) {
      const vals = await redis(['MGET', ...ids.map(id => `pm:o:${store}:${id}`)]);
      for (let i = 0; i < ids.length; i++) {
        if (!vals[i]) { await redis(['ZREM', `pm:a:${store}`, ids[i]]); continue; } // expired after 30 days
        const o = JSON.parse(vals[i]);
        if (o.store !== store || o.status === 'done') continue;
        orders.push(shape(o));
      }
    }
    return send(res, 200, { ok: true, store, v, orders });
  } catch (e) {
    return send(res, e.status || 502, { ok: false, error: 'Could not load the Inbox.' });
  }
};
