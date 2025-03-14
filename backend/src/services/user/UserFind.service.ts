import { UserRepository } from "../../database/repositories/UserRepository";

class UserFindService {
    async execute() {
        const users = await UserRepository.find({
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
                role: true,
                created_at: false,
                updated_at: false
            }
        });
        return users;
    }
}

export default UserFindService;