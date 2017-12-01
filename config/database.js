const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    uri:'mongodb://localhost:27017/meanblog',
    secret: crypto,
    db: 'meanblog'
}