import { Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats(): string {
    return 'All cats';
  }

  @Post()
  createCat(): string {
    return 'Cat created';
  }

  @Get(':id')
  getOneCat(@Param('id') id: string): string {
    return `one cat ${id}`;
  }

  @Delete(':id')
  deleteCat(): string {
    return `delete cat`;
  }

  @Put(':id')
  updateCat(): string {
    return `update cat`;
  }
}
