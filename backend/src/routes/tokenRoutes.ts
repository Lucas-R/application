import { Request, Response, Router } from "express";
import CheckController from "../controllers/token/Check.controller";

const tokenRoutes = Router();

tokenRoutes.post("/v1/check", (req: Request, res: Response) => {
    res.status(200).send(new CheckController().handle(req, res));
});

export default tokenRoutes;