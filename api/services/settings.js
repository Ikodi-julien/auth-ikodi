module.exports = {
  BASE_URL:
    process.env.NODE_ENV === "production"
      ? "https://auth.ikodi.eu"
      : "http://localhost:5050",
  FRONT_URL:
    process.env.NODE_ENV === "production"
      ? "https://auth.ikodi.eu"
      : "http://localhost:8080",
  URL_CHUNK: process.env.NODE_ENV === "production" ? "https://" : "http://",
};
