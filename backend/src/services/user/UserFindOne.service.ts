import { HealthRepository } from "../../database/repositories/HealthRepository";
import { UserRepository } from "../../database/repositories/UserRepository";

class UserFindOneService {
    async execute(id: string) {
        const user = await UserRepository.findOne({ 
            where: { id },
            select: {
                id: false,
                name: true,
                email: true,
                password: false,
                role: true,
                created_at: true,
                updated_at: true
            }
        });
        const health = await HealthRepository.find({ 
            where: { 
                user_id: id 
            },
            select: {
                id: true,
                title: true,
                description: true,
                date: true,
                created_at: false,
                updated_at: false
            }
        });
        return {...user, health};
    }
}

export default UserFindOneService;