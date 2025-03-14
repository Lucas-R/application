import { UserRepository } from "../../database/repositories/UserRepository";
import { UserSchema } from "../../schemas/UserSchema";
import { hash } from "../../utils/password";

class UserCreateService {
    async execute(body: UserSchema) {
        const create = UserRepository.create({
            ...body,
            password: await hash(body.password)
        });
        const user = await UserRepository.save(create);
        return user.id;
    }
}

export default UserCreateService;