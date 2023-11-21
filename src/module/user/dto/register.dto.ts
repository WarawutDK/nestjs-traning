import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty ,IsEmail } from 'class-validator';

export class RegisterDTO {

  @ApiProperty({example:"Warawut"})
  @IsNotEmpty()
  firstname: string;

  @ApiProperty()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  password: string;
}
