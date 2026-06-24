import { Controller, Get } from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @Get()
  findAll() {
    return 'essa rota retorna todos os recados ';
  }

  @Get(':id')
  findOne() {
    return 'essa rota retorna UM recado';
  }
}
