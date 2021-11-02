const {Router} = require("express");
const router = Router();
const {resolve} = require('path');
const jwtMW = require('../middlewares/jwt.mw');
const redisMW = require('../middlewares/redis.mw');

const {
  login, 
  signup, 
  count, 
  deleteMe,
  getUserData,
  redirectLogout
} = require('../controllers/authController');

router.get('/', (req, res) => {
  // console.log('GET /');
  res.status(200).json({data: 'IKODI auth server API'})
});
router.get('/doc', (req, res) => res.sendFile(resolve('doc.html')));
router.get('/count', count);

router.post('/login', login);
router.post('/signup', signup);

router.get('/me', redisMW.verify, jwtMW.verify, getUserData);
router.post('/logout', jwtMW.verifyLogout, redisMW.setLogout, redirectLogout);

router.delete('/test/:id', deleteMe);

module.exports = router;