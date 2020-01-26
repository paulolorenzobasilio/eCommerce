import { Module } from '@nestjs/common';
import { SellerService } from './seller.service';
import { SellerController } from './seller.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seller } from './seller.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Seller])],
  providers: [SellerService],
  controllers: [SellerController],
})
export class SellerModule {}
