import { LoginSchema } from "../../schemas/LoginSchema";
import { PayloadSchema } from "../../schemas/PayloadSchema";
import { UserSchema } from "../../schemas/UserSchema"
import { comparePasswords } from "../../utils/password";
import { token } from "../../utils/token";

class LoginService {
    async execute(login: LoginSchema, user: UserSchema) {
        if(await comparePasswords(login.password,user.password)) {
            const payload: PayloadSchema = {
                name: user.name,
                email: user.email,
                role: user.role as string
            }
            return token(payload);
        } else {
            return false;
        }
    }
}

export default LoginService;