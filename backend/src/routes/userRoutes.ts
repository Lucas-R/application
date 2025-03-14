import { Request, Response, Router } from "express";
import UserCreateController from "../controllers/user/UserCreate.controller";
import UserFindController from "../controllers/user/UserFind.controller";
import UserFindOneController from "../controllers/user/UserFindOne.controller";
import UserUpdateController from "../controllers/user/UserUpdate.controller";
import UserDeleteController from "../controllers/user/UserDelete.controller";

const userRoutes = Router();

userRoutes.post("/v1/", async (req: Request, res: Response) => {
    res.status(200).json(await new UserCreateController().handle(req, res));
});

userRoutes.get("/v1/", async (req: Request, res: Response) => {
    res.status(200).json(await new UserFindController().handle());
});

userRoutes.get("/v1/:id", async (req: Request, res: Response) => {
    res.status(200).json(await new UserFindOneController().handle(req, res));
});

userRoutes.put("/v1/:id", async (req: Request, res: Response) => {
    res.status(200).json(await new UserUpdateController().handle(req, res));
});

userRoutes.delete("/v1/:id", async (req: Request, res: Response) => {
    res.status(200).json(await new UserDeleteController().handle(req, res));
});

export default userRoutes;