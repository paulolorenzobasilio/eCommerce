import { IsNumberString } from "class-validator";

export class SellerIdParams {
    @IsNumberString()
    id: number;
}