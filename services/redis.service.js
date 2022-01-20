const redisClient = require("../database/redisDB");
const { refreshTokenLifeSpan } = require("../services/jwt.service");

module.exports = {
  setLogin: (id) => {
    // console.log("redis set login:", id);
    redisClient.setex(id, refreshTokenLifeSpan, "login");
  },

  setLogout: (id) => {
    // console.log("redis set logout:", id);
    redisClient.setex(id, refreshTokenLifeSpan, "logout");
  },
};
