const redisClient = require('../database/redisDB');
const {refreshTokenLifeSpan} = require('../services/jwt.service');

module.exports = {
  setLogin: (id) => {
    redisClient.setex(id, refreshTokenLifeSpan, 'login');
  },
    
  setLogout: (id) => {
    redisClient.setex(id, refreshTokenLifeSpan, 'logout');
  }
}