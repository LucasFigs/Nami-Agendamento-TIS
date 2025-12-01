import redisClient from "../redisClient.js";
import {
  enviarConfirmacao,
  enviarCancelamento
} from "../services/emailService.js";

export const iniciarConsumidor = async () => {

  await redisClient.subscribe("AGENDAMENTO_CRIADO", (message) => {
    console.log("Evento AGENDAMENTO_CRIADO recebido");
    const dados = JSON.parse(message);
    enviarConfirmacao(dados.email, dados);
  });

  await redisClient.subscribe("AGENDAMENTO_CANCELADO", (message) => {
    console.log("Evento AGENDAMENTO_CANCELADO recebido");
    const dados = JSON.parse(message);
    enviarCancelamento(dados.email, dados);
  });

  console.log("Consumidor ativo nos canais AGENDAMENTO_CRIADO e AGENDAMENTO_CANCELADO");
};
