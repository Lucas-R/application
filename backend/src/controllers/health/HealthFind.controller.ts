import { Request, Response } from "express";
import HealthFindService from "../../services/health/HealthFind.service";

class HealthFindController {
    async heandle(req: Request, res: Response){
        const healths = await new HealthFindService().execute();
        return healths;
    }
}

export default HealthFindController;