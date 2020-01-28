import { IsOptional, IsNotEmpty } from "class-validator";

export class UpdateProductDto {
    @IsOptional()
    readonly name: string;

    @IsOptional()
    readonly description: string;
}