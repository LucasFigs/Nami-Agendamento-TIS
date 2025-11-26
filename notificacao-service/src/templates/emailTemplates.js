const confirmationTemplate = (pacienteNome, medicoNome, especialidade, data, horario) => `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Confirmação de Agendamento</title>
<style>
  body{font-family:Arial,sans-serif;background:#f4f4f4;padding:20px}
  .container{max-width:600px;margin:0 auto;background:white;border-radius:10px;overflow:hidden;box-shadow:0 0 20px rgba(0,0,0,0.1)}
  .header{background:#007bff;color:white;padding:30px;text-align:center}
  .body{padding:30px;line-height:1.6;color:#333}
  .footer{background:#f8f9fa;padding:20px;text-align:center;font-size:12px;color:#666}
</style>
</head>
<body>
<div class="container">
  <div class="header"><h1>Consulta Agendada com Sucesso!</h1></div>
  <div class="body">
    <p>Olá <strong>${pacienteNome}</strong>,</p>
    <p>Sua consulta foi agendada:</p>
    <ul>
      <li><strong>Médico(a):</strong> Dr(a). ${medicoNome}</li>
      <li><strong>Especialidade:</strong> ${especialidade}</li>
      <li><strong>Data:</strong> ${new Date(data).toLocaleDateString('pt-BR')}</li>
      <li><strong>Horário:</strong> ${horario}</li>
    </ul>
    <p>Qualquer dúvida, entre em contato com a clínica.</p>
  </div>
  <div class="footer">© 2025 Sistema de Agendamento Médico</div>
</div>
</body></html>
`;

const cancellationTemplate = (pacienteNome, medicoNome, data, horario) => `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Cancelamento</title></head>
<body style="font-family:Arial,sans-serif;background:#f4f4f4;padding:20px">
<div style="max-width:600px;margin:0 auto;background:white;border-radius:10px;overflow:hidden;box-shadow:0 0 20px rgba(0,0,0,0.1)">
  <div style="background:#dc3545;color:white;padding:30px;text-align:center"><h1>Consulta Cancelada</h1></div>
  <div style="padding:30px;line-height:1.6;color:#333">
    <p>Olá <strong>${pacienteNome}</strong>, sua consulta foi cancelada:</p>
    <ul>
      <li><strong>Médico(a):</strong> Dr(a). ${medicoNome}</li>
      <li><strong>Data:</strong> ${new Date(data).toLocaleDateString('pt-BR')}</li>
      <li><strong>Horário:</strong> ${horario}</li>
    </ul>
  </div>
</div>
</body></html>
`;

module.exports = { confirmationTemplate, cancellationTemplate };
