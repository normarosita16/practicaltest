import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KaryawanModule } from './karyawan/karyawan.module';
import { Karyawan } from './typeorm/entities/karyawan.entity';
import { Tugas } from './typeorm/entities/tugas.entity';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Karyawan, Tugas],
      synchronize: true,
      dropSchema: false,
      logging: true,
    }),
    KaryawanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
