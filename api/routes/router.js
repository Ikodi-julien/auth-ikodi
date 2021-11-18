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
  redirect
} = require('../controllers/authController');
const googleController = require('../controllers/googleController');
const githubController = require('../controllers/githubController');
const apiController = require('../controllers/apiLoginController');
const {
  sendLink,
  getResetPwd,
  resetPwd
} = require('../controllers/pwdController');

router.get('/', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

router.get('/doc', (req, res) => res.sendFile(resolve('doc.html')));
router.get('/count', count);

router.post('/login', login, redirect);
router.post('/signup', signup, login, redirect);
router.post('/logout', jwtMW.verifyLogout, redisMW.setLogout, redirectLogout);

router.get('/google', apiController.redirectUri);
router.get('/google/auth', googleController.connect, apiController.login, apiController.signup, apiController.login, );

router.get('/github', apiController.redirectUri)
router.get('/github/auth', githubController.getTokens, githubController.getCredentials, apiController.login, apiController.signup, apiController.login);

router.get('/me', jwtMW.verify, redisMW.verify, getMe);
router.delete('/me/credentials', jwtMW.verify, redisMW.verify, deleteMe);
router.put('/me/password', jwtMW.verify, redisMW.verify, updateMePassword);
router.put('/me/credentials', jwtMW.verify, redisMW.verify, updateMe);

router.post('/forgot-pwd', sendLink)
router.get('/reset-pwd/:id/:token', getResetPwd)
router.post('/reset-pwd/:id/:token', resetPwd)

module.exports = router;