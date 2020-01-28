import { IsNotEmpty } from "class-validator";

export class UpdateSellerDto {
    @IsNotEmpty()
    readonly name: string
}