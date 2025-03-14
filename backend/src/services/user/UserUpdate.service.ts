import { UserRepository } from "../../database/repositories/UserRepository";
import { UserSchema } from "../../schemas/UserSchema";

class UserUpdateService {
    async execute(id: string, body: Partial<UserSchema>) {
        const user = await UserRepository.update(id, body);
        return user;
    }
}

export default UserUpdateService;