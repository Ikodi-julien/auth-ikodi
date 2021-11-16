module.exports = {
  BASE_URL : "http://localhost:5050",
  URL_CHUNK: process.env.NODE_ENV === 'production' ? 'https://' : 'http://',
} 