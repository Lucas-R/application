import { Request, Response } from "express";
import UserUpdateService from "../../services/user/UserUpdate.service";
import { UserSchema } from "../../schemas/UserSchema";


class UserUpdateController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const body: Partial<UserSchema> = req.body;
        return await new UserUpdateService().execute(id, body);
    }
}

export default UserUpdateController;