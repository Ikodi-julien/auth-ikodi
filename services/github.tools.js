const githubKey =
  process.env.NODE_ENV === "production"
    ? require("./github_key")
    : require("./github_key_local.json");

const {
  client_id,
  client_secret,
  tokenHost,
  tokenPath,
  authorizationPath,
  redirect_uri,
  scope,
  userPath,
} = githubKey.web;

const config = {
  client: {
    id: client_id,
    secret: client_secret,
  },
  auth: {
    tokenHost: tokenHost,
    tokenPath: tokenPath,
    authorizePath: authorizationPath,
  },
};

const {
  ClientCredentials,
  ResourceOwnerPassword,
  AuthorizationCode,
} = require("simple-oauth2");

const client = new AuthorizationCode(config);

const githubAuthUri = client.authorizeURL({
  redirect_uri: redirect_uri,
  scope: scope,
  state: "",
});

const getTokens = async (code) => {
  const tokenParams = {
    code,
    redirect_uri: redirect_uri,
    scope: scope,
  };

  try {
    return await client.getToken(tokenParams);
  } catch (error) {
    console.log("Access Token Error", error.message);
  }
};
module.exports = { githubAuthUri, getTokens, userPath };
