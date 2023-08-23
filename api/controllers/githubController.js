const { getTokens, userPath } = require("../services/github.tools");
const axios = require("axios");

const githubController = {
  getTokens: async (req, response, next) => {
    const code = req.query.code;
    console.log("githubController getTokens code", code);
    const accessToken = await getTokens(code);
    req.accessToken = accessToken.token.access_token;
    console.log("githubController getTokens accessToken", accessToken);
    next();
  },
  getCredentials: async (req, res, next) => {
    try {
      const user = await axios.get(userPath, {
        headers: {
          Authorization: `token ${req.accessToken}`,
        },
      });
      console.log("githubController getCredentials user.data", user.data);
      req.accessToken = "";
      req.credentials = {
        nickname: user.data.login,
        firstname: user.data.name,
        email: user.data.email,
        password: `${user.data.login}-${user.data.email}-${user.data.name}`,
      };
      next();
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = githubController;
