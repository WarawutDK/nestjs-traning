import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StatusEntity } from './status.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'task' })
export class TaskEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => StatusEntity, (statusEntity) => statusEntity.tasks)
  @JoinColumn({ name: 'status_id' })
  @Index()
  status: StatusEntity[];

  @ManyToMany(() => UserEntity, (userEntity) => userEntity.id)
  @JoinTable({ name: 'task_user' })
  users: UserEntity[];

  @ManyToOne(() => UserEntity, (userEntity) => userEntity.createTasks)
  @JoinColumn({ name: 'create_by' })
  @Index()
  createBy: UserEntity;

  @CreateDateColumn({ name: 'create_on', type: 'timestamp' })
  createOn: Date;

  @UpdateDateColumn({ name: 'update_on', type: 'timestamp' })
  updateOn: Date;
}
