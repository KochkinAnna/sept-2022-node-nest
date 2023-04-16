import {
  IS_PHONE_NUMBER,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ required: true, example: 'Anna' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false, example: '32' })
  @IsNumber()
  @IsOptional()
  age: number;

  @ApiProperty({ required: true, example: 'user@gmail.com' })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ required: true, example: 'Lviv' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ required: false, example: 'false' })
  @IsBoolean()
  @IsOptional()
  status: boolean;
}
