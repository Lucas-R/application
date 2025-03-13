import { UserRepository } from "../../database/repositories/UserRepository";
import { UserSchema } from "../../schemas/UserSchema";

class RegisterService {
    async execute(body: UserSchema) {
        const register = UserRepository.create(body);
        const user = await UserRepository.save(register);
        return user;
    }
}

export default RegisterService;