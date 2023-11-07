import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport"
import { UserModule } from "src/module/user/user.module";
import { LocalStrategy } from "./local/local.strategy";
import { JwtStrategy } from "./jwt/jwt.strategy";


@Module({
    imports: [PassportModule, UserModule],
    providers: [LocalStrategy, JwtStrategy],
})
export class AuthModule {}