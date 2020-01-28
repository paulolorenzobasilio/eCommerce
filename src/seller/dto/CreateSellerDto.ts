import { IsNotEmpty } from 'class-validator'

export class CreateSellerDto {
    @IsNotEmpty()
    readonly name: string;
}