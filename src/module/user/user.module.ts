import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/model/Postgres/user.entity';
import { JwtModule } from '@nestjs/jwt/dist';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity]),JwtModule],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
