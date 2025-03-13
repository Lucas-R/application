import { LoginSchema } from "../../schemas/LoginSchema";
import { UserSchema } from "../../schemas/UserSchema"
import { comparePasswords } from "../../utils/password";

class LoginService {
    async execute(login: LoginSchema, user: UserSchema) {
        if(await comparePasswords(login.password,user.password)) {
            return user;
        } else {
            return false;
        }
    }
}

export default LoginService;