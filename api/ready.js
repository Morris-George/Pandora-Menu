// Tells the menu whether "Send my list" can work yet (storage + staff sign-in configured). Until then the menu keeps its show-the-list-to-staff behaviour.
const { redisConf, send } = require('./_lib');
module.exports = function handler(req, res) {
  return send(res, 200, { ok: true, ready: !!(redisConf() && process.env.STAFF_PINS && process.env.STAFF_SECRET) });
};
