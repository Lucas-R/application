import { UserRepository } from "../database/repositories/UserRepository";

class UserFindService {
    async execute() {
        const users = await UserRepository.find();
        return users;
    }
}

export default UserFindService;