import { Module } from '@nestjs/common';
import { Karyawan } from '../typeorm/entities/karyawan.entity';
import { Tugas } from '../typeorm/entities/tugas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KaryawanController } from './controllers/karyawan.controller';
import { KaryawanService } from './services/karyawan.service';

@Module({
  imports: [TypeOrmModule.forFeature([Karyawan, Tugas])],
  controllers: [KaryawanController],
  providers: [KaryawanService],
})
export class KaryawanModule {}
