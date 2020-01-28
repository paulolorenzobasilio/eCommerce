import { IsNotEmpty, IsNumberString } from "class-validator";

export class SellerParams {
    @IsNumberString()
    @IsNotEmpty()
    sellerId: number;
    
    @IsNotEmpty()
    @IsNumberString()
    id: number;
}