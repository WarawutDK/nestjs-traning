import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskEntity } from 'src/model/Postgres/task.entity';
import { LogModule } from 'src/log/log.module';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity]),LogModule],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}
