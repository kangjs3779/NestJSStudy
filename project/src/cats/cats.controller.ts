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
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { PositiveIntPipe } from 'src/common/pipes/positiveint.pipe';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat(): string {
    console.log('getAllCat');
    return 'All cat';
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
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
