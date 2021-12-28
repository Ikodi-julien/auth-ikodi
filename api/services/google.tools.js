const { google } = require("googleapis");

const OAuth2Data =
  process.env.NODE_ENV === "production"
    ? require("./google_key")
    : require("./google_key_local");
// const OAuth2Data = {
//   web: {
//     client_id: 1234,
//     client_secret: 'secret',
//     redirect_uris: 'http://auth.ikodi.eu',
//   }};

/**
 * Create a OAuthClient 2.0 that handles flow with API
 */
const oAuth2Client = new google.auth.OAuth2(
  OAuth2Data.web.client_id,
  OAuth2Data.web.client_secret,
  OAuth2Data.web.redirect_uris
);

/**
 * Generates the google account identification's url.
 */
const googleAuthUri = oAuth2Client.generateAuthUrl({
  access_type: "offline",
  prompt: "consent",
  scope: [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
  ],
});

/**
 * Gets the informations sent by google People API
 * @param {string} code
 */
const getGoogleAccountFromCode = async (code) => {
  try {
    // Gets the access token for the given code.
    const data = await oAuth2Client.getToken(code);
    const tokens = data.tokens;

    // Sets the auth credentials.
    oAuth2Client.setCredentials(tokens);

    // The user agreed to allow our app by giving appropriates tokens.
    // We can now use those tokens with our client to get the corresponding infos from the API
    const people = google.people({ version: "v1", auth: oAuth2Client });

    const me = await people.people.get({
      personFields: [`emailAddresses`, `names`],
      resourceName: "people/me",
    });

    const firstname = me.data.names[0].givenName;
    const lastname = me.data.names[0].familyName;
    const nickname = `${firstname}-${lastname}`;
    const email = me.data.emailAddresses[0].value;
    const password = email.substring(3, 9) + "#ikodi-auth!";

    return {
      nickname,
      firstname,
      lastname,
      password,
      email,
    };
  } catch (error) {
    console.log(error);
    return false;
  }
};

module.exports = {
  googleAuthUri,
  getGoogleAccountFromCode,
};
// console.log(url);
