const {Router} = require("express");
const router = Router();
const {resolve} = require('path');
const jwtMW = require('../middlewares/jwt.mw');
const redisMW = require('../middlewares/redis.mw');
const path = require('path');

const {
  login, 
  signup, 
  count, 
  deleteMe,
  getMe,
  redirectLogout,
  updateMe,
  updateMePassword,
} = require('../controllers/authController');

router.get('/', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});
router.get('/doc', (req, res) => res.sendFile(resolve('doc.html')));
router.get('/count', count);

router.post('/login', login);
router.post('/signup', signup);

router.get('/me', jwtMW.verify, redisMW.verify, getMe);
router.delete('/me', jwtMW.verify, redisMW.verify, deleteMe);
router.put('/me/password', jwtMW.verify, redisMW.verify, updateMePassword);
router.put('/me', jwtMW.verify, redisMW.verify, updateMe);

router.post('/logout', jwtMW.verifyLogout, redisMW.setLogout, redirectLogout);

module.exports = router;