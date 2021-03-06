const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) {
    return res
      .status(401)
      .json({ msg: 'TOKEN not found. Authorization access denied' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtsecret'));

    req.admin = decoded.admin;
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(400).json({ msg: 'Token is not valid' });
  }
};
