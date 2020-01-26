import {MigrationInterface, QueryRunner, getConnection} from 'typeorm';
import { Seller } from 'src/seller/seller.entity';

export class InsertSellerTable1580023894936 implements MigrationInterface {
    name = 'InsertSellerTable1580023894936';

    public async up(): Promise<any> {
        await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Seller)
        .values([
            { name: 'Smith, Marks and McCullough'},
            { name: 'Hauck - Braun'},
            { name: 'Rohan Group'},
            { name: 'Boyer, Casper and Rosenbaum'},
            { name: 'Koepp - Beier'},
        ]).execute();
    }

    public async down(): Promise<any> {
        return true;
    }

}
