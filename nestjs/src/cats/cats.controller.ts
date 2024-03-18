import { Controller, Get } from '@nestjs/common';
import { DogsService } from 'src/dogs/dogs.service';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly dogsService: DogsService,
  ) {}

  @Get()
  findAll(): string {
    return this.dogsService.findAll().join(', ');
  }
}
