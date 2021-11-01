const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  
  getTokens: (payload) => {
    
    const accessToken = jwt.sign(payload, JWT_SECRET, {
      expiresIn: 60*60
    });
    const refreshToken = jwt.sign(payload, JWT_SECRET, {
      expiresIn: 60*60*24*7
    })
    
    return [accessToken, refreshToken];
  }
}