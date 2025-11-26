const sgMail = require('@sendgrid/mail');
require('dotenv').config();
const { confirmationTemplate, cancellationTemplate } = require('../templates/emailTemplates');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const enviarConfirmacao = async (to, dados) => {
  const msg = {
    to, from: process.env.FROM_EMAIL,
    subject: 'Consulta Agendada - Confirmação',
    html: confirmationTemplate(dados.pacienteNome, dados.medicoNome, dados.especialidade, dados.data, dados.horario)
  };
  try {
    await sgMail.send(msg);
    console.log(`Confirmação enviada para ${to}`);
  } catch (e) { console.error('Erro SendGrid:', e.response?.body || e); }
};

const enviarCancelamento = async (to, dados) => {
  const msg = {
    to, from: process.env.FROM_EMAIL,
    subject: 'Consulta Cancelada',
    html: cancellationTemplate(dados.pacienteNome, dados.medicoNome, dados.data, dados.horario)
  };
  try {
    await sgMail.send(msg);
    console.log(`Cancelamento enviado para ${to}`);
  } catch (e) { console.error('Erro SendGrid:', e.response?.body || e); }
};

module.exports = { enviarConfirmacao, enviarCancelamento };
