// The staff Inbox: active lists (New or Being served) for the store the token belongs to - never any other store.
//   GET /api/inbox  (Authorization: Bearer <token>)  ->  {ok, store, orders:[{id,number,name,phone,items,itemCount,total,status,at}]}
const { redis, send, tokenStore, pad3 } = require('./_lib');

module.exports = async function handler(req, res) {
  const store = tokenStore(req);
  if (!store) return send(res, 401, { ok: false, error: 'locked' });
  try {
    const ids = await redis(['ZRANGE', `pm:a:${store}`, 0, 199]);
    const orders = [];
    if (ids && ids.length) {
      const vals = await redis(['MGET', ...ids.map(id => `pm:o:${store}:${id}`)]);
      for (let i = 0; i < ids.length; i++) {
        if (!vals[i]) { await redis(['ZREM', `pm:a:${store}`, ids[i]]); continue; } // expired after 30 days
        const o = JSON.parse(vals[i]);
        if (o.store !== store || o.status === 'done') continue;
        orders.push({ id: o.id, number: pad3(o.n), name: o.name, phone: o.phone, items: o.items, itemCount: o.itemCount, total: o.total, status: o.status, at: o.at });
      }
    }
    return send(res, 200, { ok: true, store, orders });
  } catch (e) {
    return send(res, e.status || 502, { ok: false, error: 'Could not load the Inbox.' });
  }
};
