const googleTools = require('../services/google.tools');
const {BASE_URL} = require('../services/settings');

const googleController = {

  connect: async (request, response, next) => {
    console.log('googleConnect');
    try {
      const dataGoogle = await googleTools.getGoogleAccountFromCode(
        request.query.code
      );

      if (dataGoogle) {
        // console.log(dataGoogle);
        request.credentials = dataGoogle;
        return next();
      }
      response.redirect(403, BASE_URL);
      
    } catch (error) {
      console.log(error);
      response.redirect(401, BASE_URL);
    }
  },
}

module.exports = googleController;