module.exports = {
  BASE_URL:
    process.env.NODE_ENV === "production"
      ? "https://auth.pellin.eu"
      : "http://localhost:5050",
  FRONT_URL:
    process.env.NODE_ENV === "production"
      ? "https://auth.pellin.eu"
      : "http://localhost:5050",
  URL_CHUNK: process.env.NODE_ENV === "production" ? "https://" : "http://",
};
