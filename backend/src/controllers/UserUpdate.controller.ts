import { Request, Response } from "express";
import UserUpdateService from "../services/UserUpdate.service";
import { UserSchema } from "../database/schemas/UserSchema";


class UserUpdateController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const body: Partial<UserSchema> = req.body;
        return await new UserUpdateService().execute(id, body);
    }
}

export default UserUpdateController;