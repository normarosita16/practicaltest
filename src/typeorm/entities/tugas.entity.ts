import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Karyawan } from './karyawan.entity';

@Entity()
export class Tugas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column('text')
  deskripsi: string;

  @ManyToOne(() => Karyawan, (karyawan) => karyawan.tasks)
  karyawan: Karyawan;
}
