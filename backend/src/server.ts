import "dotenv/config";
import "reflect-metadata"
import express, { Request, Response } from "express";
import { connection } from "./database/config/connection";
import tokenRoutes from "./routes/tokenRoutes";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import healthRoutes from "./routes/healthRoutes";

const PORT = Number(process.env.BACKEND_PORT) || 3000;
const HOST = process.env.BACKEND_HOST || "localhost";

function bootstrap() {
    const server = express();
    server.use(express.json());
    server.use("/token", tokenRoutes);
    server.use("/auth", authRoutes);
    server.use("/user", userRoutes);
    server.use("/health", healthRoutes);
    server.listen(PORT, HOST, () => console.log("Server is running..."));
}

connection.initialize()
    .then(() => {
        bootstrap(); 
    })
    .catch((err) => console.log(err));
