import "dotenv/config";
import "reflect-metadata"
import express, { Request, Response } from "express";
import { connection } from "./database/config/connection";

const PORT = Number(process.env.BACKEND_PORT) || 3000;
const HOST = process.env.BACKEND_HOST || "localhost";

function bootstrap() {
    const server = express();
    server.use(express.json());
    server.get("/message", (req: Request, res: Response) => {
        res.json({ message: "Olá do backend!" });
    });
    server.listen(PORT, HOST, () => console.log("Server is running..."));
}

connection.initialize()
    .then(() => {
        bootstrap(); 
    })
    .catch((err) => console.log(err));
