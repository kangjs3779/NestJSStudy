import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
  Patch,
  HttpException,
  ParseIntPipe,
} from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat(): string {
    throw new HttpException('api is broken', 401);
    return 'All cat';
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param: number) {
    console.log(typeof param);
    return `one cat ${param}`;
  }

  @Post()
  createCat(): string {
    return 'Cat created';
  }

  @Delete(':id')
  deleteCat(): string {
    return `delete cat`;
  }

  @Put(':id')
  updateCat(): string {
    return `update cat`;
  }

  @Patch(':id')
  updatePartialCat(): string {
    return `update partial cat`;
  }
}
