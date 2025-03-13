import { UserRepository } from "../../database/repositories/UserRepository";

class UserDeleteService {
    async execute(id: string) {
        const user = await UserRepository.delete(id);
        return user;
    }
}

export default UserDeleteService;