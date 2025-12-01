const { Resend } = require("resend");
require("dotenv").config();
const { confirmationTemplate, cancellationTemplate } = require("../templates/emailTemplates");

const resend = new Resend(process.env.RESEND_API_KEY);

// Função genérica de envio
const enviarEmail = async (to, assunto, mensagemHtml) => {
  try {
    const data = await resend.emails.send({
      from: process.env.FROM_EMAIL || "onboarding@resend.dev",
      to,
      subject: assunto,
      html: mensagemHtml
    });

    console.log("Email enviado:", data);
    return data;

  } catch (err) {
    console.error("Erro ao enviar email:", err);
    return null; // Retorna null em vez de erro para não parar o servidor
  }
};

const enviarConfirmacao = async (email, dados) => {
  const mensagem = confirmationTemplate(
      dados.nome, 
      dados.medico || "Médico NAMI", 
      "Consulta", 
      dados.data, 
      dados.horario
  );
  return enviarEmail(email, "Agendamento Confirmado", mensagem);
};

const enviarCancelamento = async (email, dados) => {
  const mensagem = cancellationTemplate(
      dados.nome, 
      dados.medico || "Médico NAMI", 
      dados.data, 
      dados.horario
  );
  return enviarEmail(email, "Agendamento Cancelado", mensagem);
};

module.exports = {
    enviarEmail,
    enviarConfirmacao,
    enviarCancelamento
};