import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskEntity } from 'src/model/Postgres/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepo:Repository<TaskEntity>
  ){}
  async create(source: CreateTaskDto):Promise<TaskEntity> {
    const task = await this.taskRepo.save({
      title: source.title,
      description: source.description
    })
    return task;
  }
}
