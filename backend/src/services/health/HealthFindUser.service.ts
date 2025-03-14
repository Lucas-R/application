import { HealthRepository } from "../../database/repositories/HealthRepository";

class HealthFindUserService {
    async execute(user: string) {
        const healths = await HealthRepository.find();

        return healths;
    }
}

export default HealthFindUserService;