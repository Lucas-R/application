import { HealthRepository } from "../../database/repositories/HealthRepository";
import { HealthSchema } from "../../schemas/HealthSchema";

class HealthCreateService {
    async execute(user: string, payload: Partial<HealthSchema>) {
        const create = HealthRepository.create({
            ...payload,
            user_id: user
        });
        const health = await HealthRepository.save(create);

        return health;
    }
}

export default HealthCreateService;