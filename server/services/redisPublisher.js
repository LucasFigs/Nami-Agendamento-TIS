const redisClient = require('../config/redisClient');

const publishEvent = async (channel, data) => {
  try {
    // Garante que o cliente está conectado
    if (!redisClient.isOpen) {
      await redisClient.connect();
    }
    
    const message = JSON.stringify(data);
    await redisClient.publish(channel, message);
    console.log(`📡 Evento publicado no canal ${channel}:`, data);
  } catch (error) {
    console.error(`❌ Erro ao publicar no Redis (${channel}):`, error);
  }
};

module.exports = { publishEvent };