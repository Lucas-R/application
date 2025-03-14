import { Request, Response } from "express";
import HealthUpdateService from "../../services/health/HealthUpdate.service";
import { HealthSchema } from "../../schemas/HealthSchema";

class HealthUpdateController {
    async heandle(req: Request, res: Response){
        const { id } = req.params;
        const payload: Partial<HealthSchema> = req.body;
        const health = await new HealthUpdateService().execute(id, payload);
        return health;
    }
}

export default HealthUpdateController;