import { BadRequestException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from 'src/module/user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService:UserService) {
    super();
  }

  async validate(username: string, password: string) {

    const user = await this.userService.validateUser(username,password);
    if(!user) {
        return new BadRequestException();
    }
    return user;
  }
}
