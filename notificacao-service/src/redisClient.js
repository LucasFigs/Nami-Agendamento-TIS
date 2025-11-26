const redis = require('redis');
require('dotenv').config();

const redisClient = redis.createClient({
  url: process.env.REDIS_URL
});

redisClient.on('error', (err) => console.error('Erro Redis:', err));

(async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
    console.log('Notificação Service conectado ao Redis');
  }
})();

module.exports = redisClient;
