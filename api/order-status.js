// Staff move a list along: New -> Being served -> Done. Done lists leave the Inbox.
//   POST /api/order-status {id, status:"serving"|"done"}  (Authorization: Bearer <token>)
// The order key is built from the token's store, so a tablet can only ever touch its own store's lists.
const { redis, send, readBody, tokenStore } = require('./_lib');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { ok: false, error: 'POST only' });
  const store = tokenStore(req);
  if (!store) return send(res, 401, { ok: false, error: 'locked' });
  try {
    const b = await readBody(req);
    const id = String(b.id || ''), status = String(b.status || '');
    if (!/^\d{4}-\d{2}-\d{2}:\d{1,6}$/.test(id) || !['serving', 'done'].includes(status)) return send(res, 400, { ok: false, error: 'bad request' });
    const key = `pm:o:${store}:${id}`;
    const cur = await redis(['GET', key]);
    if (!cur) { await redis(['ZREM', `pm:a:${store}`, id]); return send(res, 404, { ok: false, error: 'That list is gone.' }); }
    const o = JSON.parse(cur);
    o.status = status;
    o[status === 'done' ? 'doneAt' : 'servingAt'] = Date.now();
    await redis(['SET', key, JSON.stringify(o), 'KEEPTTL']); // keeps the original 30-day clock
    if (status === 'done') await redis(['ZREM', `pm:a:${store}`, id]);
    await redis(['INCR', `pm:v:${store}`]);
    return send(res, 200, { ok: true, id, status });
  } catch (e) {
    return send(res, e.status || 502, { ok: false, error: 'Could not update the list.' });
  }
};
