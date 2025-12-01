import { createClient } from "redis";
import dotenv from "dotenv";
dotenv.config();

const redisClient = createClient({
  url: process.env.REDIS_URL
});

redisClient.on("error", (err) => console.error("Erro Redis:", err));

if (!redisClient.isOpen) {
  redisClient.connect().then(() => {
    console.log("Notificação Service conectado ao Redis");
  });
}

export default redisClient;
