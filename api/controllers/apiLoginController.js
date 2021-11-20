const {googleAuthUri} = require('../services/google.tools');
const {githubAuthUri} = require('../services/github.tools');
const {jwtService} = require('../services/jwt.service');
const cookieService = require('../services/cookie.service');
const redisService = require('../services/redis.service');
const queries = require('../queries/authQueries');
const {URL_CHUNK} = require('../services/settings');
const bcrypt = require('bcrypt');
const {redirect} = require('./authController')

module.exports = {
  redirectUri: (req, res) => {
    let authUri;
    if (req.path === '/google') authUri = googleAuthUri;
    if (req.path === '/github') authUri = githubAuthUri;
    console.log('redirectUri', req.path);
    res.redirect(authUri);
  },
  login: async (req, response, next) => {
    console.log('api login');
    const { email} = req.credentials;
    const {userId} = await queries.getOneByEmail(email);
    
    if (!userId && !req.loginCount) {
      req.loginCount = true;
      return next();
    }
    // set JWT cookies http only
    const me = await queries.getMe(userId);
    console.log(me);
    const [accessToken, refreshToken] = jwtService.getTokens({...me, password: ''});
    
    response.cookie('access_token', accessToken, cookieService.options);
    response.cookie('refresh_token', refreshToken, cookieService.options);
    // set id = loggued in redis
    redisService.setLogin(me.id);
    // console.log('login user id :', user.id);
    return redirect(res, res);
  },
  signup: async (req, res, next) => {
    console.log('google signup');
    let {
      firstname, lastname, nickname, password, email
    } = req.credentials;
    // console.log(req.credentials);
    try {
      const hash = await bcrypt.hash(password, 10)
      const newUserId = await queries.insertUser({
        firstname, 
        lastname, 
        nickname, 
        password: hash, 
        email,
        apisignup: true
      });
      console.log('newUser', newUserId);
      return next();
      
    } catch(error) {
      console.log(error);
      return res.json({message: error.toString()});
    }
  }
}