import {MigrationInterface, QueryRunner} from 'typeorm';

export class CreateSellerTable1580023831990 implements MigrationInterface {
    name = 'CreateSellerTable1580023831990';

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "seller" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(75) NOT NULL)`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "seller"`, undefined);
    }

}
