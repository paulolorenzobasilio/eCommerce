import { IsNumberString, IsNotEmpty, IsOptional } from "class-validator";

export class SellerIdParams {
    @IsNumberString()
    @IsNotEmpty()
    sellerId: number;
}