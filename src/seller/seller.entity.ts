import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Seller {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 75})
    name: string;
}
