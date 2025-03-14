import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn 
} from "typeorm"
import { HealthSchema } from "../../schemas/HealthSchema";

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
    
    @Column()
    user_id!: string;

    @CreateDateColumn()
    created_at?: Date;

    @UpdateDateColumn()
    updated_at?: Date;
}
