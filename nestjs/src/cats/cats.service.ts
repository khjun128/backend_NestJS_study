import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: string[] = ['Persian', 'Siamese'];

  findAll(): string[] {
    return this.cats;
  }
}
