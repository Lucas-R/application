import { Request, Response } from "express";
import HealthFindUserService from "../../services/health/HealthFindUser.service";

class HealthFindUserController {
    async heandle(req: Request, res: Response){
        const { user } = req.params;
        const healths = await new HealthFindUserService().execute(user);
        return healths;
    }
}

export default HealthFindUserController;