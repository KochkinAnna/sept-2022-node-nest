import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class PetDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  type: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  logo: string;

  @ApiProperty({ required: false })
  @IsNumber()
  @IsOptional()
  status: boolean;
}
