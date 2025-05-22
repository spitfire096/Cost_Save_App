import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateBudgetDto {
  @IsString()
  readonly name!: string;

  @IsNumber()
  readonly amount!: number;

  @IsOptional()
  @IsString()
  readonly description?: string;

  @IsString()
  readonly period!: string; // e.g., 'monthly', 'yearly'
}