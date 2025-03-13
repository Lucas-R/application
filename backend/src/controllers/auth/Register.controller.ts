import { Request, Response } from "express";
import { UserSchema } from "../../schemas/UserSchema";
import RegisterService from "../../services/auth/Register.service";

class registerController {
    async handle(req: Request, res: Response) {
        const body: UserSchema = req.body;
        return await new RegisterService().execute(body);
    }
}

export default registerController;