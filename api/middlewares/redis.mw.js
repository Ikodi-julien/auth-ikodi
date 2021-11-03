const redisClient = require('../database/redisDB');
const redisService = require('../services/redis.service');

module.exports = {
  verify: (req, res, next) => {
    const id = req.userId;
    // console.log('id:', id);
    if (!id) {
      return res.status(401).json({message: 'no id found'});
    };
    
    try {
      redisClient.get(id, (err, reply) => {
        console.log('id value:', reply);
        if ( reply === 'login') return next();
            
        return res.status(401).json({message: 'tokens invalidated'});
          
      });
    } catch(error) {
      return res.status(500).json({message: error.message});
    }

  },
  setLogout: (req, res, next) => {
    const id = req.userId
    
    if (!id) {
      return res.status(401).json({message: 'no id found'});
    };
    
    redisService.setLogout(id);
    next();
  },

}