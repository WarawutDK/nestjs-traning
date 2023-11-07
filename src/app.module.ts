import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostgresProviderModule } from './Provider/database/postgres/provider.module';
import { UserModule } from './module/user/user.module';
import { AuthModule } from 'auth/auth.module';
import { StatusModule } from './module/status/status.module';
import { TaskModule } from './module/task/task.module';

@Module({
  imports: [PostgresProviderModule,UserModule,AuthModule,StatusModule, TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
