import { HealthRepository } from "../../database/repositories/HealthRepository";
import { HealthSchema } from "../../schemas/HealthSchema";

class HealthUpdateService {
    async execute(id: string, payload: Partial<HealthSchema>) {
        const health = await HealthRepository.update(id, payload);

        return health;
    }
}

export default HealthUpdateService;