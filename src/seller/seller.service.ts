import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Seller } from './seller.entity';
import { Repository } from 'typeorm';
import { CreateSellerDto } from './dto/CreateSellerDto';
import { SellerIdParams } from './params/SellerIdParams';
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
    
    async update(@Param() sellerIdParams: SellerIdParams,  updateSellerDto: UpdateSellerDto){
        await this.sellerRepository.update(sellerIdParams.id, updateSellerDto)
    }

    async delete(@Param() sellerIdParams: SellerIdParams){
        await this.sellerRepository.delete(sellerIdParams.id)
    }
}
