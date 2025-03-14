import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    OneToMany
} from "typeorm";
import { UserRole, UserSchema } from "../../schemas/UserSchema";
import { Health } from "./Health";

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

    @Column({ default: UserRole.NORMAL })
    role?: UserRole;

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;
}
