const redis = require("redis");
const client = redis.createClient({
  url: `redis://${process.env.REDIS_URL}:6379`,
});

client.on("connect", function () {
  console.log("Redis-server connected");
});
client.on("error", function () {
  console.log("Redis-server error");
});

module.exports = client;
