const redis = require('redis');
require('dotenv').config();

const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

redisClient.on('error', (err) => console.error('Erro no Redis Client (Server):', err));

(async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
    console.log('🔌 Server conectado ao Redis (Publisher)');
  }
})();

module.exports = redisClient;