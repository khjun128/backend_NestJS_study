import { Controller, Get } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly dogsService: DogsService,
  ) {}

  @Get()
  findAll(): string[] {
    return this.catsService.findAll();
  }
}
