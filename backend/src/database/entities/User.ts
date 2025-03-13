import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn 
} from "typeorm";
import { UserRole, UserSchema } from "../schemas/UserSchema";

@Entity('user')
export class User implements UserSchema {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @Column()
    name!: string;

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    role?: UserRole;

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;
}
