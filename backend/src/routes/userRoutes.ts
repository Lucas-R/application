import { Request, Response, Router } from "express";
import UserFindController from "../controllers/UserFind.controller";

const userRoutes = Router();

userRoutes.get("/v1/", async (req: Request, res: Response) => {
    res.status(200).json(await new UserFindController().handle());
});

export default userRoutes;