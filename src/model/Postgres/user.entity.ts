import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TaskEntity } from './task.entity';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Column({select : false})
  password: string;

  @ManyToMany(() => TaskEntity, (taskEntity) => taskEntity.id)
  tasks: TaskEntity[];

  @OneToMany(() => TaskEntity, (taskEntity) => taskEntity.status)
  createTasks: TaskEntity[];

  @CreateDateColumn({ name: 'create_on', type: 'timestamp' })
  createOn: Date;

  @UpdateDateColumn({ name: 'update_on', type: 'timestamp' })
  updateOn: Date;
}
