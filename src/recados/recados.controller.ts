import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('recados')
export class RecadosController {
  @HttpCode(HttpStatus.OK)
  @Get()
  findAll(@Query() pagination: { limit?: string; offset?: string }) {
    const { limit = 10, offset = 0 } = pagination;
    return `essa rota retorna todos os recados. Limiti=${limit}, offset=${offset} .`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `essa rota retorna o recado ID ${id}`;
  }

  @Post()
  create(@Body() body: string) {
    return body;
  }

  // o @Patch() -> atualiza apenas algumas partes do recurso
  // ja o @Put atualiza o recurso inteiro
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: string) {
    return { id, body };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `ID ${id} deletado com sucesso!`;
  }
}
