const redisClient = require('../redisClient');
const { enviarConfirmacao, enviarCancelamento } = require('../services/emailService');

const iniciarConsumidor = async () => {
  await redisClient.subscribe('AGENDAMENTO_CRIADO', (message) => {
    console.log('Evento AGENDAMENTO_CRIADO recebido');
    const dados = JSON.parse(message);
    enviarConfirmacao(dados.pacienteEmail, dados);
  });

  await redisClient.subscribe('AGENDAMENTO_CANCELADO', (message) => {
    console.log('Evento AGENDAMENTO_CANCELADO recebido');
    const dados = JSON.parse(message);
    enviarCancelamento(dados.pacienteEmail, dados);
  });

  console.log('Consumidor ativo nos canais AGENDAMENTO_CRIADO e AGENDAMENTO_CANCELADO');
};

module.exports = { iniciarConsumidor };
