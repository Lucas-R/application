import { Request, Response } from "express";
import UserFindOneService from "../../services/user/UserFindOne.service";


class UserFindOneController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        return await new UserFindOneService().execute(id);
    }
}

export default UserFindOneController;