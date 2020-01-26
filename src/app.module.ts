import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as ormconfig from './config/orm.config';
import { SellerModule } from './seller/seller.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    SellerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
