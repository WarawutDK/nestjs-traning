import { Injectable, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'auth/jwt/jwt-auth.guard';
import { StatusEntity } from 'src/model/Postgres/status.entity';
import { Repository } from 'typeorm';
import { CreateStatusDTO } from './dto/create-status.dto';

@Injectable()
export class StatusService {

  constructor(
    @InjectRepository(StatusEntity)
    private readonly statusRepo:Repository<StatusEntity>
  ) {}

  async createStatus(source: CreateStatusDTO): Promise<StatusEntity> {

    const status = await this.statusRepo.save({
        label:source.label
    })
    return status;
  }

}
