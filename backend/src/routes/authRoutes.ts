import { Request, Response, Router } from "express";
import LoginController from "../controllers/auth/Login.controller";
import registerController from "../controllers/auth/Register.controller";
import LogoutController from "../controllers/auth/Logout.controller";

const authRoutes = Router();

authRoutes.post("/v1/login", async(req: Request, res: Response) => {
    res.status(200).send(await new LoginController().handle(req, res));
});

authRoutes.post("/v1/register", async(req: Request, res: Response) => {
    res.status(200).send(await new registerController().handle(req, res));
});

authRoutes.get("/v1/logout", async(req: Request, res: Response) => {
    res.status(200).send(new LogoutController().handle());
});

export default authRoutes;