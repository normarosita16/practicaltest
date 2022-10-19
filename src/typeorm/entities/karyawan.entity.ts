import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Tugas } from './tugas.entity';

@Entity()
export class Karyawan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nama: string;

  @OneToMany(() => Tugas, (task) => task.karyawan)
  tasks: Tugas[];
}
