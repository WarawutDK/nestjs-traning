import { Column, Entity, ObjectId, ObjectIdColumn } from 'typeorm';

export enum LogType {
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}
@Entity('log')
export class LogEntity {
  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  message: string;
  @Column()
  type: LogType;
}
