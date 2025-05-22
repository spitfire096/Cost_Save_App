import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCostDto {
  @IsString()
  @IsNotEmpty()
  readonly description!: string;

  @IsNumber()
  @IsNotEmpty()
  readonly amount!: number;

  @IsString()
  @IsNotEmpty()
  readonly category!: string;

  @IsString()
  readonly date?: string; // Optional field for the date of the cost
}