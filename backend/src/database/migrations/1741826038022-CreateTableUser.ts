import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { UserRole } from "../schemas/UserSchema";

export class CreateTableUser1741826038022 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "100",
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "255",
                        isNullable: false
                    },  
                    {
                        name: "role",
                        type: "enum",
                        enum: Object.values(UserRole),
                        default: `'${UserRole.NORMAL}'`,
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP EXTENSION IF EXISTS "uuid-ossp"`);
        await queryRunner.query(`DROP TABLE users`);
    }

}
