import { Controller, Get, Post, Body, Param, Query, Header, Headers, Put, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/CreateProductDto';
import { SellerIdParams } from './params/SellerIdParams'
import { SellerParams } from './params/SellerParams';
import { UpdateProductDto } from './dto/UpdateProductDto';

@Controller('/api/seller/:sellerId/product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    findAll(@Param() sellerIdParams: SellerIdParams): Promise<Product[]> {
        return this.productService.findAll(sellerIdParams)
    }

    @Post()
    create(@Param() sellerIdParams: SellerIdParams,
        @Body() createProductDto: CreateProductDto) {
        this.productService.create(sellerIdParams, createProductDto)
    }

    @Put(':id')
    update(@Param() sellerParams: SellerParams, @Body() updateProductDto: UpdateProductDto){
        this.productService.update(sellerParams, updateProductDto)
    }

    @Delete(':id')
    delete(@Param() sellerParams: SellerParams){
        this.productService.delete(sellerParams)
    }
}
