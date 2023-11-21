
import { Module } from "@nestjs/common";
import { LogService } from "./log.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LogEntity } from "src/model/mongodb/log.entity";

@Module({
    imports: [TypeOrmModule.forFeature([LogEntity],'mongodb')],
    providers: [LogService],
    exports: [LogService],
})
export class LogModule {}