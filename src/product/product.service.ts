import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/CreateProductDto';
import { SellerIdParams } from './params/SellerIdParams';
import { SellerParams } from './params/SellerParams';
import { UpdateProductDto } from './dto/UpdateProductDto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>
    ) { }

    findAll(sellerIdParams: SellerIdParams): Promise<Product[]> {
        return this.productRepository.find({ sellerId: sellerIdParams.sellerId })
    }

    async create(sellerIdParams: SellerIdParams, createProductDto: CreateProductDto) {
        await this.productRepository.insert({ ...sellerIdParams, ...createProductDto })
    }

    async update(sellerParams: SellerParams, updateProductDto: UpdateProductDto) {
        await this.productRepository.update(sellerParams.id, updateProductDto)
    }

    async delete(sellerParams: SellerParams){
        await this.productRepository.delete(sellerParams.id)
    }
}
