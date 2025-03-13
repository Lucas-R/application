import { Request, Response } from "express";
import UserCreateService from "../../services/user/UserCreate.service";
import { UserSchema } from "../../schemas/UserSchema";

class UserCreateController {
    async handle(req: Request, res: Response) {
        const body: UserSchema = req.body; 
        return await new UserCreateService().execute(body);
    }
}

export default UserCreateController;