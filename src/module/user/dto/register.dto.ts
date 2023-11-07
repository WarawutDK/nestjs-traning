import { IsNotEmpty ,IsEmail } from 'class-validator';

export class RegisterDTO {

  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
