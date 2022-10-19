import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { KaryawanService } from '../services/karyawan.service';
import { KaryawanDTO } from '../dtos/karyawan.dto';
import { TugasDTO } from '../dtos/tugas.dto';

@Controller('test')
export class KaryawanController {
  constructor(private KaryawanService: KaryawanService) {}

  @Get('/karyawan')
  lihatOutput() {
    return this.KaryawanService.showAll();
  }

  @Post('/karyawan')
  membuatRecord(@Body() data: KaryawanDTO) {
    return this.KaryawanService.create(data);
  }

  @Get('/karyawan/:id')
  lihatDetail(@Param('id') id: number) {
    return this.KaryawanService.lihatDetail(id);
  }

  @Put('/karyawan/:id')
  updateDetail(@Param('id') id: number, @Body() data: Partial<KaryawanDTO>) {
    return this.KaryawanService.update(id, data);
  }

  @Delete('/karyawan/:id')
  destroyData(@Param('id') id: number) {
    return this.KaryawanService.deleteData(id);
  }

  /*
  @Get('service')
  lihatSemua() {
    return this.KaryawanService.lihatSemua();
  }*/

  //Tugas

  @Post('/tugas/:karyawanid')
  createTugas(
    @Param('karyawanid') karyawanid: number,
    @Body() TugasDTO: TugasDTO,
  ) {
    return this.KaryawanService.createTugasKaryawan(karyawanid, TugasDTO);
  }

  @Get('/tugas')
  listTugas() {
    return this.KaryawanService.listTugas();
  }

  @Put('/tugas/:id')
  updateTugas(@Param('id') id: number, @Body() data: Partial<TugasDTO>) {
    return this.KaryawanService.updateTugas(id, data);
  }

  @Delete('/tugas/:id')
  destroyTugas(@Param('id') id: number) {
    return this.KaryawanService.deleteTugas(id);
  }
}
