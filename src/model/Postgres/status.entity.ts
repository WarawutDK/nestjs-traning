import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TaskEntity } from './task.entity';

@Entity({ name: 'status' })
export class StatusEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  label: string;

  @OneToMany(() => TaskEntity, (taskEntity) => taskEntity.status)
  tasks: TaskEntity[];

  @CreateDateColumn({ name: 'create_on', type: 'timestamp' })
  createOn: Date;

  @UpdateDateColumn({ name: 'update_on', type: 'timestamp' })
  updateOn: Date;
}
