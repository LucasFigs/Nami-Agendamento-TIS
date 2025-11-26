require('dotenv').config();
const express = require('express');
const { iniciarConsumidor } = require('./consumers/emailConsumer');
const redisClient = require('./redisClient');

const app = express();
const PORT = process.env.PORT || 3003;

app.get('/health', async (req, res) => {
  const redisStatus = redisClient.isOpen ? 'OK' : 'ERROR';
  res.json({
    status: 'OK',
    service: 'notificacao-service',
    redis: redisStatus,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Notificação Service rodando na porta ${PORT}`);
  iniciarConsumidor();
});
