import redisClient from "../redisClient.js";
import { enviarConfirmacao, enviarCancelamento } from "../services/emailService.js";

export const iniciarConsumidor = async () => {
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