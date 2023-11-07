import { Module } from "@nestjs/common";
import { StatusService } from "./status.service";
import { StatusController } from "./status.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StatusEntity } from "src/model/Postgres/status.entity";

@Module({
    imports: [TypeOrmModule.forFeature([StatusEntity])],
    providers: [StatusService],
    controllers: [StatusController],
})

export class StatusModule {}