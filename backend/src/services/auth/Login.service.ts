import { LoginSchema } from "../../schemas/LoginSchema";
import { UserSchema } from "../../schemas/UserSchema"

class LoginService {
    async execute(login: LoginSchema, user: UserSchema) {
        if(login.password === user.password) {
            return user;
        } else {
            return false;
        }
    }
}

export default LoginService;