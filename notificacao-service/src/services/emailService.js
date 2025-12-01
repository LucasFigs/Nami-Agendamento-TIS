import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

// Função genérica de envio
export const enviarEmail = async (to, assunto, mensagemHtml) => {
  try {
    const data = await resend.emails.send({
      from: "Nami Agendamentos <onboarding@resend.dev>",
      to,
      subject: assunto,
      html: mensagemHtml
    });

    console.log("Email enviado:", data);
    return data;

  } catch (err) {
    console.error("Erro ao enviar email:", err);
    throw err;
  }
};

// =============== EXPORTS QUE SEU CONSUMER PRECISA =====================

export const enviarConfirmacao = async (email, dados) => {
  const mensagem = `
    <h2>Agendamento Confirmado</h2>
    <p>Olá ${dados.nome}, seu agendamento foi confirmado!</p>
    <p><strong>Data:</strong> ${dados.data}</p>
  `;

  return enviarEmail(email, "Agendamento Confirmado", mensagem);
};

export const enviarCancelamento = async (email, dados) => {
  const mensagem = `
    <h2>Agendamento Cancelado</h2>
    <p>Olá ${dados.nome}, seu agendamento foi cancelado.</p>
    <p><strong>Data:</strong> ${dados.data}</p>
  `;

  return enviarEmail(email, "Agendamento Cancelado", mensagem);
};
