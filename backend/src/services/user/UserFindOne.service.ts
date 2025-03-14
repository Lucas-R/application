import { UserRepository } from "../../database/repositories/UserRepository";

class UserFindOneService {
    async execute(id: string) {
        const user = await UserRepository.findOne({ 
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
                role: true,
                created_at: true,
                updated_at: true,
                healths: {
                    id: true,
                    title: true,
                    description: true,
                    date: true,
                    created_at: false,
                    updated_at: false
                }
            },
            relations: ['healths']
        });
        return user;
    }
}

export default UserFindOneService;