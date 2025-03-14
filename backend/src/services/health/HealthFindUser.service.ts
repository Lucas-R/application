import { HealthRepository } from "../../database/repositories/HealthRepository";

class HealthFindUserService {
    async execute(user: string) {
        const healths = await HealthRepository.find({ where: { user_id: user } });

        return healths;
    }
}

export default HealthFindUserService;