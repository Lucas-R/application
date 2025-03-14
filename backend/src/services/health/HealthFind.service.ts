import { HealthRepository } from "../../database/repositories/HealthRepository";

class HealthFindService {
    async execute() {
        const healths = await HealthRepository.find();

        return healths;
    }
}

export default HealthFindService;