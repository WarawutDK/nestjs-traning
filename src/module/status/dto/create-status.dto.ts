import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export class CreateStatusDTO {
  @IsNotEmpty()
  @IsString()
  label: string;
}
