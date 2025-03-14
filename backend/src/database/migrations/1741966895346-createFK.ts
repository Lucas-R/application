import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class CreateFK1741966895346 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey(
            'health',
            new TableForeignKey({
              columnNames: ['user_id'],
              referencedTableName: 'user',
              referencedColumnNames: ['id'],
              onDelete: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('health', 'user_id');
    }
}
