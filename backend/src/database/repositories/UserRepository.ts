import { connection } from "../config/connection";
import { UserSchema } from "../schemas/UserSchema";
import { User } from "../entities/User";

export const UserRepository = connection.getRepository<UserSchema>(User)