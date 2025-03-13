import { Request, Response } from "express";
import { LoginSchema } from "../../schemas/LoginSchema";
import { UserSchema } from "../../schemas/UserSchema";
import { UserRepository } from "../../database/repositories/UserRepository";
import LoginService from "../../services/auth/Login.service";

class LoginController {
    async handle(req: Request, res: Response) {
        const login = req.body as LoginSchema;
        const user = await UserRepository.findOne({where: {email: login.email}}) as UserSchema;
        return await new LoginService().execute(login, user);
    }
}

export default LoginController;