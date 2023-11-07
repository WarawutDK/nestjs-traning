import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigModule } from 'src/config/database/postgres/config.module';
import { PostgresConfigService } from 'src/config/database/postgres/config.service';
import { StatusEntity } from 'src/model/Postgres/status.entity';
import { TaskEntity } from 'src/model/Postgres/task.entity';
import { UserEntity } from 'src/model/Postgres/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [PostgresConfigModule],
      useFactory: (PostgresConfigService: PostgresConfigService) => ({
        type: 'postgres',
        host: PostgresConfigService.host,
        port: PostgresConfigService.port,
        username: PostgresConfigService.user,
        password: PostgresConfigService.pserword,
        database: PostgresConfigService.database,
        synchronize: true,
        entities: [UserEntity, TaskEntity, StatusEntity],
      }),
      inject: [PostgresConfigService],
    }),
  ],
  exports: [TypeOrmModule],
})
export class PostgresProviderModule {}
