import { UserRepository } from "../database/repositories/UserRepository";
import { UserSchema } from "../database/schemas/UserSchema";

class UserCreateService {
    async execute(body: UserSchema) {
        const create = UserRepository.create(body);
        const user = await UserRepository.save(create);
        return user;
    }
}

export default UserCreateService;