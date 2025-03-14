import { UserSchema } from "./UserSchema"

export interface HealthSchema {
    id?: string,
    title: string
    description?: string
    date?: Date
    created_at?: Date
    updated_at?: Date
    user_id: string
}