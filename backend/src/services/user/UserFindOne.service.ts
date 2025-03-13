import { UserRepository } from "../../database/repositories/UserRepository";

class UserFindOneService {
    async execute(id: string) {
        const user = await UserRepository.findOne({ where: { id } });
        return user;
    }
}

export default UserFindOneService;