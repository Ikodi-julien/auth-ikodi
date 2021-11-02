const redisClient = require('../database/redisDB');
const {accessTokenLifeSpan, refreshTokenLifeSpan} = require('../services/jwt.service');

module.exports = {
  verify: (req, res, next) => {
    const accessToken = req.cookies.access_token || null;
    const refreshToken = req.cookies.refresh_token || null;
    
    if (!accessToken || !refreshToken) {
      return res.status(401).json({message: 'no credentials found'});
    };
    // console.log(3);
    let accessTokenValue, refreshTokenValue;
    
    try {
      redisClient.get(accessToken, (err, reply) => {
        accessTokenValue = reply;
        
        redisClient.get(refreshToken, (err, reply) => {
          refreshTokenValue = reply;
          if (!accessTokenValue && !refreshTokenValue) return next();
          return res.status(401).json({message: 'tokens invalidated'});
          
        });
      });
    } catch(error) {
      return res.status(500).json({message: error.message});
    }

  },
  setLogout: (req, res, next) => {
    const accessToken = req.cookies.access_token;
    const refreshToken = req.cookies.refresh_token;
    
    if (!accessToken || !refreshToken) {
      return res.status(401).json({message: 'no credentials found'});
    };
    console.log('setLogout', accessToken);

    redisClient.setex(accessToken, accessTokenLifeSpan, 'true');
    redisClient.setex(refreshToken, refreshTokenLifeSpan, 'true');
    
    next();
  }
}