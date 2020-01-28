import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateSellerDto {
    @IsOptional()
    readonly name: string
}