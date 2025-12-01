

# 🏥 NAMI Agendamento - Sistema de Gestão Médica

Sistema completo de agendamento de consultas desenvolvido para a UNIFOR, oferecendo interfaces específicas para pacientes, médicos e administradores.

## 🎯 Funcionalidades

### 👥 Para Pacientes
- Agendamento de consultas online
- Visualização de histórico
- Gestão de perfil pessoal

### 👨‍⚕️ Para Médicos
- Dashboard com agenda personalizada
- Gestão de pacientes e consultas
- Relatórios de desempenho

### 🛠️ Para Administradores
- Gestão completa de usuários e médicos
- Relatórios analíticos do sistema
- Controle de acessos e permissões

## 🏗️ Arquitetura

```

Frontend: React.js com React Router
Backend: Node.js + Express + MongoDB
Autenticação: JWT Tokens

```

## 📦 Estrutura do Projeto

```

nami-agendamento/
├── client/          \# Aplicação React frontend
├── server/          \# API Node.js backend
└── README.md        \# Este arquivo

````

## 🚀 Começando

### Pré-requisitos
- Node.js 16+
- MongoDB
- npm ou yarn

### Instalação

1. **Backend:**
```bash
cd server
npm install
cp .env.example .env
# Configure suas variáveis de ambiente no arquivo .env recém-criado
npm run dev
````

2.  **Frontend:**

<!-- end list -->

```bash
cd client
npm install
npm start
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do diretório `server/`. Abaixo está um modelo do que deve conter (substitua os valores entre `< >` pelas suas configurações reais):

```env
# Conexão com o Banco de Dados (Exemplo para MongoDB Atlas ou Local)
# Substitua <usuario>, <senha> e <cluster> pelos seus dados reais
MONGODB_URI=mongodb+srv://<SEU_USUARIO>:<SUA_SENHA>@<SEU_CLUSTER>.mongodb.net/nami

# Chave secreta para assinatura dos tokens JWT (Crie uma senha forte e única)
JWT_SECRET=defina_sua_chave_secreta_aqui

# Configurações do Servidor
PORT=5000
NODE_ENV=development
```

> **Nota:** Nunca comite o arquivo `.env` com suas senhas reais no Git. Certifique-se de que ele esteja incluído no seu `.gitignore`.

## 👥 Usuários de Teste

  - **Admin:** `admin@nami.com` / `admin123`
  - **Médico:** `medico@nami.com` / `medico123`
  - **Paciente:** `paciente@unifor.br` / `paciente123`

## 📋 Scripts Disponíveis

### Backend (server/)

  - `npm start` - Produção
  - `npm run dev` - Desenvolvimento com nodemon
  - `npm run seed` - Popular banco com dados de teste

### Frontend (client/)

  - `npm start` - Desenvolvimento
  - `npm run build` - Build de produção
  - `npm test` - Executar testes

## 🛠️ Desenvolvimento

### Convenções

  - Commits em português
  - Branches: `feature/`, `fix/`, `hotfix/`
  - Code review obrigatório

### API Endpoints Principais

  - `POST /api/auth/login` - Autenticação
  - `GET /api/agendamentos` - Listar agendamentos
  - `POST /api/agendamentos` - Criar agendamento
  - `GET /api/medicos` - Listar médicos

## 📞 Suporte

Para issues e dúvidas, abra uma issue no repositório ou contate a equipe de desenvolvimento.

## 📄 Licença

Este projeto é desenvolvido para a UNIFOR - Universidade de Fortaleza.
