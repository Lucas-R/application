import { Health } from "../database/entities/Health"
import { HealthSchema } from "./HealthSchema"

export enum UserRole {
    NORMAL  = "normal",
    ADMIN   = "admin",
    SUPER   = "super"
}

export interface UserSchema {
    id?: string
    name: string
    email: string
    password: string
    role?: UserRole
    created_at?: Date
    updated_at?: Date
}