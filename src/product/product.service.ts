import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository, Brackets, Like } from 'typeorm';
import { CreateProductDto } from './dto/CreateProductDto';
import { SellerIdParams } from './params/SellerIdParams';
import { SellerParams } from './params/SellerParams';
import { UpdateProductDto } from './dto/UpdateProductDto';
import { SearchProductQuery } from './query/SearchProductQuery';

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

    async delete(sellerParams: SellerParams) {
        await this.productRepository.delete(sellerParams.id)
    }

    async search(sellerIdParams: SellerIdParams, searchProductQuery: SearchProductQuery): Promise<Product[]> {
        const products = await this.productRepository
            .createQueryBuilder()
            .where('product.sellerId = :sellerId', { sellerId: sellerIdParams.sellerId })
            .andWhere(new Brackets(qb => {
                qb.where("product.name LIKE :name", { name: `%${searchProductQuery.name}%` })
                    .orWhere("product.description LIKE :description", { description: `%${searchProductQuery.description}%` })
            }))
            .execute()
        return products
    }
}
