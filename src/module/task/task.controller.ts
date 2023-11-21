import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Request,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { JwtAuthGuard } from 'auth/jwt/jwt-auth.guard';
import { TaskEntity } from 'src/model/Postgres/task.entity';
import { TaskListFilter } from './dto/task-list-filter.dto';
import { AssignMemberTask } from './dto/Assing-member-task.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { LogService } from 'src/log/log.service';

@ApiBearerAuth()
@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService,
    private readonly logger: LogService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  @UsePipes(ValidationPipe)
  async create(@Body() createTaskDto: CreateTaskDto, @Request() req) {
    const task = await this.taskService.create(createTaskDto, req.user.id);
    return task;
  }

  @UseGuards(JwtAuthGuard)
  @Post('/list')
  async taskList(@Body() filter: TaskListFilter) {
    const tasks = await this.taskService.taskList(filter);
    if (tasks.length == 0) {
      this.logger.warning(filter);
    } else {
      this.logger.info(filter);
    }
    return tasks;
  }

  @UseGuards(JwtAuthGuard)
  @Post('/AssignTaskToMember')
  async assign_member(@Body() assign: AssignMemberTask) {
    const taskmember = await this.taskService.AssignMembersToTask(assign);
    return taskmember;
  }
}
