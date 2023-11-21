import { Injectable , BadRequestException} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskEntity } from 'src/model/Postgres/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/model/Postgres/user.entity';
import { TaskListFilter } from './dto/task-list-filter.dto';
import { AssignMemberTask } from './dto/Assing-member-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepo: Repository<TaskEntity>,
  ) {}
  async create(source: CreateTaskDto, userId: string): Promise<TaskEntity> {
    const newTask: TaskEntity = new TaskEntity();

    newTask.title = source.title;
    newTask.description = source.description;
    newTask.statusid = source.statusid;
    newTask.createBy = { id: userId } as UserEntity;

    const task = await this.taskRepo.save(newTask);
    return task;
  }

  async taskList(filter: TaskListFilter): Promise<TaskEntity[]> {
    // const tasks = await this.taskRepo.find({
    //   relations:["status","createBy"],
    // });
    const tasks = await this.taskRepo
      .createQueryBuilder('task')
      .leftJoinAndSelect('task.status', 's')
      .leftJoin('task.members','m')
      .addSelect(['m.firstname','m.lastname']);

    if (filter.title) {
      tasks.andWhere(`task.title like :filtertitle`, {
        filtertitle: '%' + filter.title + '%',
      });
    }

    if (filter.description) {
      tasks.andWhere(`task.description like :filterdescription`, {
        filterdescription: '%' + filter.description + '%',
      });
    }

    if (filter.status) {
      tasks.andWhere(`s.id = :filterstatus`, { filterstatus: filter.status });
    }

    if (filter.datestart) {
      tasks.andWhere(`DATE_TRUNC('day',task.createOn) >= :filterdatestart`, {
        filterdatestart: filter.datestart,
      });
    }

    if (filter.dateend) {
      tasks.andWhere(`DATE_TRUNC('day',task.createOn) <=  :filterdateend`, {
        filterdateend: filter.dateend,
      });
    }

    return tasks.getMany();
  }

  async AssignMembersToTask(source : AssignMemberTask) {
    const task = await this.taskRepo.findOne({where:{id : source.taskId}});
    if(!task) {
      throw new BadRequestException();
    }
    task.members = source.members.map((m) => ({id : m.id}) as UserEntity);
    
    this.taskRepo.save(task);
    return task.members;
  }

}
