import { Request, Response, Router } from "express";
import HealthCreateController from "../controllers/health/HealthCreate.controller";
import HealthFindController from "../controllers/health/HealthFind.controller";
import HealthFindUserController from "../controllers/health/HealthFindUser.controller";
import HealthUpdateController from "../controllers/health/HealthUpdate.controller";

const healthRoutes = Router();

healthRoutes.post("/v1/:user", async(req: Request, res: Response) => {
    res.status(200).send(await new HealthCreateController().heandle(req, res));
});

healthRoutes.get("/v1", async(req: Request, res: Response) => {
    res.status(200).send(await new HealthFindController().heandle(req, res));
});

healthRoutes.get("/v1/:user", async(req: Request, res: Response) => {
    res.status(200).send(await new HealthFindUserController().heandle(req, res));
});

healthRoutes.put("/v1/:id", async(req: Request, res: Response) => {
    res.status(200).send(await new HealthUpdateController().heandle(req, res));
});

export default healthRoutes;