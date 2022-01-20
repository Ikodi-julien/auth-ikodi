const {getTokens, userPath} = require('../services/github.tools');
const axios = require('axios');

const githubController = {

  getTokens: async (req, response, next) => {
    console.log('github getTokens');
    
      const code = req.query.code;
      // console.log('code', code);
      const accessToken = await getTokens(code);
      req.accessToken = accessToken.token.access_token;
      // console.log(accessToken.token.access_token);
      next();;
  },
  getCredentials: async (req, res, next) => {
    console.log('getCredentials');
    
    try {
      const user = await axios.get(userPath, {
        headers: {
          Authorization: `token ${req.accessToken}`
        }
      });
      // console.log(user.data);
      req.accessToken = '';
      req.credentials = {
        nickname: user.data.login,
        firstname: user.data.name,
        email: user.data.email,
        password: `${user.data.login}-${user.data.email}-${user.data.name}`
      }
      next();
    } catch(error) {
      console.log(error);
    }
  },

}

module.exports = githubController;