import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/model/Postgres/user.entity';
import { Repository } from 'typeorm';
import { RegisterDTO } from './dto/register.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(source: RegisterDTO): Promise<UserEntity> {
    const hash: string = await bcrypt.hash(source.password, 10);

    const user = await this.userRepo.save({
      firstname: source.firstname,
      lastname: source.lastname,
      email: source.email,
      password: hash,
    });

    return user;
  }

  async validateUser(email: string, password: string) {
    const user = await this.userRepo.findOne({ where: { email: email } });

    const isPasswordTrue = await bcrypt.compare(password,user.password);

    if(isPasswordTrue) {
        return user;
    }
    return null;
  }

  generateTokenUser(user:UserEntity) {
    let payload = {
        sub: user.id,
        email: user.email,
        username: user.firstname + ' ' + user.lastname
    };
    const token = this.jwtService.sign(payload,{
        secret:'SECRET',
        expiresIn:'1h'
    });
    return token;
  }
}
