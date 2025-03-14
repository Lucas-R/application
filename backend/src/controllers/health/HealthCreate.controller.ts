import { Request, Response } from "express";
import HealthCreateService from "../../services/health/HealthCreate.service";
import { HealthSchema } from "../../schemas/HealthSchema";

class HealthCreateController {
    async heandle(req: Request, res: Response){
        const { user } = req.params;
        const payload: Partial<HealthSchema> = req.body;
        const healths = await new HealthCreateService().execute(user, payload);
        return healths;
    }
}

export default HealthCreateController;