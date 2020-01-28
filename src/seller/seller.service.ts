import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seller } from './seller.entity';
import { Repository } from 'typeorm';
import { CreateSellerDto } from './dto/CreateSellerDto';
import { IdParams } from './params/IdParams';
import { UpdateSellerDto } from './dto/UpdateSellerDto';

@Injectable()
export class SellerService {
    constructor(
        @InjectRepository(Seller)
        private readonly sellerRepository: Repository<Seller>,
    ) { }

    findAll(): Promise<Seller[]> {
        return this.sellerRepository.find();
    }

    async create(createSellerDto: CreateSellerDto){
        await this.sellerRepository.insert(createSellerDto)
    }
    
    async update(@Param() idParams: IdParams,  updateSellerDto: UpdateSellerDto){
        await this.sellerRepository.update(idParams.id, updateSellerDto)
    }

    async delete(@Param() idParams: IdParams){
        await this.sellerRepository.delete(idParams.id)
    }
}
