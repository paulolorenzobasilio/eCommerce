import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProductsTable1580201850991 implements MigrationInterface {
    name = 'CreateProductsTable1580201850991'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(75) NOT NULL, "description" text NOT NULL, "sellerId" integer)`, undefined);
        await queryRunner.query(`CREATE TABLE "temporary_product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(75) NOT NULL, "description" text NOT NULL, "sellerId" integer, CONSTRAINT "FK_d5cac481d22dacaf4d53f900a3f" FOREIGN KEY ("sellerId") REFERENCES "seller" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`, undefined);
        await queryRunner.query(`INSERT INTO "temporary_product"("id", "name", "description", "sellerId") SELECT "id", "name", "description", "sellerId" FROM "product"`, undefined);
        await queryRunner.query(`DROP TABLE "product"`, undefined);
        await queryRunner.query(`ALTER TABLE "temporary_product" RENAME TO "product"`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "product" RENAME TO "temporary_product"`, undefined);
        await queryRunner.query(`CREATE TABLE "product" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar(75) NOT NULL, "description" text NOT NULL, "sellerId" integer)`, undefined);
        await queryRunner.query(`INSERT INTO "product"("id", "name", "description", "sellerId") SELECT "id", "name", "description", "sellerId" FROM "temporary_product"`, undefined);
        await queryRunner.query(`DROP TABLE "temporary_product"`, undefined);
        await queryRunner.query(`DROP TABLE "product"`, undefined);
    }

}
