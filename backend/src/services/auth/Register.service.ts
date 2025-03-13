import { UserRepository } from "../../database/repositories/UserRepository";
import { UserSchema } from "../../schemas/UserSchema";
import { hash } from "../../utils/password";

class RegisterService {
    async execute(body: UserSchema) {
        const register = UserRepository.create({
                    ...body,
                    password: await hash(body.password)
                });
        const user = await UserRepository.save(register);
        return user;
    }
}

export default RegisterService;