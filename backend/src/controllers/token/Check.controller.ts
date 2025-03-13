import { Request, Response } from "express";
import CheckService from "../../services/token/Check.service";

class CheckController {
    handle(req: Request, res: Response) {
        const { token } = req.body;
        return new CheckService().execute(token);
    }
}

export default CheckController;