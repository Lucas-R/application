import { connection } from "../config/connection";
import { HealthSchema } from "../../schemas/HealthSchema";
import { Health } from "../entities/Health";

export const HealthRepository = connection.getRepository<HealthSchema>(Health)