const jwt = require('jsonwebtoken');
const {jwtService} = require('../services/jwt.service');
const cookieService = require('../services/cookie.service');
const JWT_SECRET = process.env.JWT_SECRET;

module.exports = {
  verify: (req, res, next) => {
    const accessToken = req.cookies.access_token || "";
    const refreshToken = req.cookies.refresh_token || "";
    // console.log(accessToken, refreshToken)
    
    try {
      const accessTokenPayload = jwt.verify(accessToken, JWT_SECRET);

      const [newAccessToken, newRefreshToken] = jwtService.getTokens({id: accessTokenPayload.id});
          
      res.cookie('access_token', newAccessToken, cookieService.options);
      res.cookie('refresh_token', newRefreshToken, cookieService.options);
      
      // console.log('accessTokenPayload.id', accessTokenPayload.id);
      req.userId = accessTokenPayload.id;
      req.oldJwt = [accessToken, refreshToken];
      next();
      
    } catch (error) {
      // console.log(error.name);
      // console.log(error.message)

      if (error.name === 'TokenExpiredError') {
        
      /*Error object:
      name: 'TokenExpiredError'
      message: 'jwt expired'
      expiredAt: [ExpDate]*/
      
        try {
          const refreshTokenPayload = jwt.verify(refreshToken, JWT_SECRET);
          
          const [newAccessToken, newRefreshToken] = jwtService.getTokens({id: refreshTokenPayload.id});
          
          res.cookie('access_token', newAccessToken, cookieService.options);
          res.cookie('refresh_token', newRefreshToken, cookieService.options);
          
          req.userId = refreshTokenPayload.id;
          req.oldJwt = [accessToken, refreshToken];
          next();
        } catch (error) {
          
          res.status(401).json(error.name !== 'Error' ?
          error :
          {
              "message": error.message
          })
        }
      }

      if (error.name === 'JsonWebTokenError') {
        /* Error object:
        name: 'JsonWebTokenError'
        message:
        'jwt malformed'
        'jwt signature is required'
        'invalid signature'
        'jwt audience invalid. expected: [OPTIONS AUDIENCE]'
        'jwt issuer invalid. expected: [OPTIONS ISSUER]'
        'jwt id invalid. expected: [OPTIONS JWT ID]'
        'jwt subject invalid. expected: [OPTIONS SUBJECT]' 
        */
        res.status(401).json({message: error.message})
      }

      if (error.name === 'NotBeforeError') {
        
      /*Error object:
      name: 'NotBeforeError'
      message: 'jwt not active'
      date: 2018-10-04T16:10:44.000Z
      */
        res.status(401).json({message: error.message})
      }
    }
  },
  verifyLogout: (req, res, next) => {
    const accessToken = req.cookies.access_token || "";
    // const refreshToken = req.cookies.refresh_token || "";
    // console.log(accessToken, refreshToken)
    
    try {
      const payload = jwt.verify(accessToken, JWT_SECRET);
      req.userId = payload.id;
      next();
      
    } catch (error) {

      if (error.name === 'TokenExpiredError') {
        next();
      }

      if (error.name === 'JsonWebTokenError') {
        res.status(401).json({message: error.message})
      }

      if (error.name === 'NotBeforeError') {
        res.status(401).json({message: error.message})
      }
    }
  }
}