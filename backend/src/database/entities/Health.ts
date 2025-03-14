import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    ManyToOne,
    JoinColumn
} from "typeorm"
import { HealthSchema } from "../../schemas/HealthSchema";
import { User } from "./User";

@Entity()
export class Health implements HealthSchema {
    @PrimaryGeneratedColumn()
    id?: string;

    @Column()
    title!: string;
    
    @Column()
    description?: string;
    
    @Column()
    date?: Date;

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    user!: User;
}
