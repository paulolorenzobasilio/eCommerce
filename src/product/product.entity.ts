import { PrimaryGeneratedColumn, Column, ManyToOne, Entity, JoinColumn } from "typeorm";
import { Seller } from "src/seller/seller.entity";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 75 })
    name: string;

    @Column({ type: 'text' })
    description: string

    @Column()
    sellerId: number

    @ManyToOne(type => Seller, seller => seller.products)
    @JoinColumn({ name: 'sellerId' })
    seller: Seller
}