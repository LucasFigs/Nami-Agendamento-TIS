import { Resend } from 'resend';
import dotenv from 'dotenv';
// Importante: No padrão novo, precisa colocar .js no final do import
import { confirmationTemplate, cancellationTemplate } from '../templates/emailTemplates.js';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

// Função auxiliar (não precisa exportar)
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
    return null;
  }
};

// ATENÇÃO: Usar 'export const' ao invés de 'const' + 'module.exports'
export const enviarConfirmacao = async (email, dados) => {
  const mensagem = confirmationTemplate(
      dados.nome, 
      dados.medico || "Médico NAMI", 
      "Consulta", 
      dados.data, 
      dados.horario
  );
  return enviarEmail(email, "Agendamento Confirmado", mensagem);
};

export const enviarCancelamento = async (email, dados) => {
  const mensagem = cancellationTemplate(
      dados.nome, 
      dados.medico || "Médico NAMI", 
      dados.data, 
      dados.horario
  );
  return enviarEmail(email, "Agendamento Cancelado", mensagem);
};
