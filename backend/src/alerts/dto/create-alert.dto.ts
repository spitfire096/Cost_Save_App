import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAlertDto {
  @IsString()
  @IsNotEmpty()
  readonly name!: string;

  @IsString()
  @IsNotEmpty()
  readonly description!: string;

  @IsNumber()
  @IsNotEmpty()
  readonly threshold!: number;

  @IsString()
  @IsNotEmpty()
  readonly type!: string;

  @IsString()
  readonly notificationChannel?: string;
}