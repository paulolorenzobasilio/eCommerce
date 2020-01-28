import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode } from '@nestjs/common';
import { SellerService } from './seller.service';
import { Seller } from './seller.entity';
import { CreateSellerDto } from './dto/CreateSellerDto';
import { SellerIdParams } from './params/SellerIdParams';
import { UpdateSellerDto } from './dto/UpdateSellerDto';

@Controller('api/seller')
export class SellerController {
    constructor(private readonly sellerService: SellerService) { }

    @Get()
    findAll(): Promise<Seller[]> {
        return this.sellerService.findAll();
    }

    @Post()
    async create(@Body() createSellerDto: CreateSellerDto) {
        this.sellerService.create(createSellerDto)
    }

    @Put(':id')
    @HttpCode(204)
    update(@Param() sellerIdParams: SellerIdParams
        , @Body() updateSellerDto: UpdateSellerDto) {
        this.sellerService.update(sellerIdParams, updateSellerDto)
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param() sellerIdParams: SellerIdParams){
        this.sellerService.delete(sellerIdParams)
    }
}
