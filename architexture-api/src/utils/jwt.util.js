const jwt = require('jsonwebtoken');

module.exports = {
    sign = data => jwt.sign(data, process.env.JWT_PASSWORD, { expiresIn: "30D" }),
    decode = token => jwt.decode(token),
    verify = token => jwt.verify(token, process.env.JWT_PASSWORD)
}
