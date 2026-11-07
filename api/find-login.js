// Password check for the hidden stock finder. Not a store PIN: it is one private password (Vercel env FINDER_PASSWORD).
//   POST /api/find-login {password}  ->  {ok, token}     (token is valid for 3 hours)
// After 5 wrong tries from one address the address is paused for 10 minutes.
const { redis, send, readBody, ip, finderPasswordOk, makeFinderToken } = require('./_lib');

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return send(res, 405, { ok: false });
  if (!process.env.FINDER_PASSWORD || !process.env.STAFF_SECRET) return send(res, 503, { ok: false, error: 'Not set up yet.' });
  try {
    const fk = 'pm:findfail:' + ip(req);
    if ((Number(await redis(['GET', fk])) || 0) >= 5) return send(res, 429, { ok: false, error: 'Too many tries. Wait 10 minutes.' });
    const b = await readBody(req);
    if (!finderPasswordOk(String(b.password || '').slice(0, 200))) {
      const n = await redis(['INCR', fk]);
      if (n === 1) await redis(['EXPIRE', fk, 600]);
      return send(res, 401, { ok: false, error: 'Wrong password.' });
    }
    await redis(['DEL', fk]);
    return send(res, 200, { ok: true, token: makeFinderToken() });
  } catch (e) {
    return send(res, e.status || 502, { ok: false, error: 'Could not check. Try again.' });
  }
};
