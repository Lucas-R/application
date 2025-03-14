import { Request, Response } from "express";
import UserDeleteService from "../../services/user/UserDelete.service";


class UserDeleteController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        return await new UserDeleteService().execute(id);
    }
}

export default UserDeleteController;