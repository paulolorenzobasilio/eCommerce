import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from 'src/product/product.entity';

@Entity()
export class Seller {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 75 })
    name: string;

    @OneToMany(type => Product, product => product.seller, {cascade: ['insert', 'update', 'remove']})
    products: Product[]
}
