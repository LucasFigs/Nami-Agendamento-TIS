const redisClient = require("../redisClient");
const {
  enviarConfirmacao,
  enviarCancelamento
} = require("../services/emailService");

const iniciarConsumidor = async () => {
  // Garantir conexão se necessário
  if (!redisClient.isOpen) {
      await redisClient.connect();
  }

  await redisClient.subscribe("AGENDAMENTO_CRIADO", (message) => {
    console.log("Evento AGENDAMENTO_CRIADO recebido");
    try {
        const dados = JSON.parse(message);
        enviarConfirmacao(dados.email, dados);
    } catch (e) {
        console.error("Erro ao processar JSON:", e);
    }
  });

  await redisClient.subscribe("AGENDAMENTO_CANCELADO", (message) => {
    console.log("Evento AGENDAMENTO_CANCELADO recebido");
    try {
        const dados = JSON.parse(message);
        enviarCancelamento(dados.email, dados);
    } catch (e) {
        console.error("Erro ao processar JSON:", e);
    }
  });

  console.log("Consumidor ativo nos canais AGENDAMENTO_CRIADO e AGENDAMENTO_CANCELADO");
};

module.exports = { iniciarConsumidor };