const redisClient = require('../config/redisClient');

const publishEvent = async (channel, data) => {
  try {
    console.log(`🔄 [REDIS] Tentando publicar no canal: ${channel}...`);

    // 1. Garantir conexão
    if (!redisClient.isOpen) {
      console.log('🔌 [REDIS] Reconectando cliente...');
      await redisClient.connect();
    }
    
    // 2. Preparar mensagem
    const message = JSON.stringify(data);

    // 3. Publicar e pegar contagem de ouvintes
    // O retorno do .publish() é o número de clientes que receberam a mensagem
    const receivers = await redisClient.publish(channel, message);

    console.log('---------------------------------------------------');
    console.log(`✅ [REDIS SUCESSO] Mensagem enviada!`);
    console.log(`📢 Canal: ${channel}`);
    console.log(`👂 Recebedores ativos: ${receivers}`); // <--- O PULO DO GATO
    console.log(`📦 Dados enviados:`, data);
    console.log('---------------------------------------------------');

    if (receivers === 0) {
        console.warn('⚠️ ALERTA: Ninguém escutou essa mensagem! Verifique se o notificacao-service está rodando.');
    }

  } catch (error) {
    console.error(`❌ [REDIS ERRO] Falha ao publicar em ${channel}:`, error);
  }
};

module.exports = { publishEvent };