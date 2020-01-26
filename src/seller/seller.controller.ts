import { Controller, Get } from '@nestjs/common';
import { SellerService } from './seller.service';
import { Seller } from './seller.entity';

@Controller('api/seller')
export class SellerController {
    constructor(private readonly sellerService: SellerService) { }

    @Get()
    findAll(): Promise<Seller[]> {
        return this.sellerService.findAll();
    }
}
