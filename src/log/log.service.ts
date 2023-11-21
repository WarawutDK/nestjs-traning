import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LogEntity, LogType } from 'src/model/mongodb/log.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(LogEntity, 'mongodb')
    private readonly logRepo: Repository<LogEntity>,
  ) {}

    private saveLog(type:LogType,...othor: any) {
        const msg = JSON.stringify({ ...othor });
        this.logRepo.save({ message: msg, type: type });
    }

  info(...othor: any) {
    this.saveLog(LogType.INFO,...othor);
  }
  
  warning(...othor: any) {
    this.saveLog(LogType.WARNING,...othor);
  }
  error(...othor: any) {
    this.saveLog(LogType.ERROR,...othor);
  }
}
