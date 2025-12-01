import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { iniciarConsumidor } from "./consumers/emailConsumer.js";
import redisClient from "./redisClient.js";

const app = express();
const PORT = process.env.PORT || 3003;

app.get("/health", (req, res) => {
  const redisStatus = redisClient.isOpen ? "OK" : "ERROR";
  res.json({
    status: "OK",
    service: "notificacao-service",
    redis: redisStatus,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Notificação Service rodando na porta ${PORT}`);
  iniciarConsumidor();
});
