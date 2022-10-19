import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Karyawan } from '../../typeorm/entities/karyawan.entity';
import { KaryawanDTO } from '../dtos/karyawan.dto';
import { Tugas } from '../../typeorm/entities/tugas.entity';
import { TugasDTO } from '../dtos/tugas.dto';
import {
  CreateKaryawanParams,
  CreateTugasKaryawanParams,
  UpdateKaryawanParams,
} from '../../utils/types';

@Injectable()
export class KaryawanService {
  constructor(
    @InjectRepository(Karyawan)
    private karyawanRepository: Repository<Karyawan>,
    @InjectRepository(Tugas) private tugasRepository: Repository<Tugas>,
  ) {}

  async showAll() {
    return await this.karyawanRepository.find();
  }

  async create(data: KaryawanDTO) {
    const karyawanNew = await this.karyawanRepository.create(data);
    await this.karyawanRepository.save(karyawanNew);
    return karyawanNew;
  }

  async lihatSemua() {
    return 'ini di service';
  }

  async lihatDetail(id: number) {
    return await this.karyawanRepository.findOne({ where: { id } });
  }

  async update(id: number, data: Partial<KaryawanDTO>) {
    await this.karyawanRepository.update({ id }, data);
    return await this.karyawanRepository.findOne({ where: { id } });
  }

  async deleteData(id: number) {
    await this.karyawanRepository.delete({ id });
    return { deleted: true };
  }

  async createTugasKaryawan(
    id: number,
    createTugasKaryawanDetails: CreateTugasKaryawanParams,
  ) {
    const karyawan = await this.karyawanRepository.findOneBy({ id });
    if (!karyawan)
      throw new HttpException(
        'Karyawan not found. Cannot create Tugas',
        HttpStatus.BAD_REQUEST,
      );
    const newTugas = this.tugasRepository.create({
      ...createTugasKaryawanDetails,
      karyawan,
    });
    return this.tugasRepository.save(newTugas);
  }

  async listTugas() {
    return await this.tugasRepository.find();
  }

  async updateTugas(id: number, data: Partial<TugasDTO>) {
    await this.tugasRepository.update({ id }, data);
    return await this.tugasRepository.findOne({ where: { id } });
  }

  async deleteTugas(id: number) {
    await this.tugasRepository.delete({ id });
    return { deleted: true };
  }
}
