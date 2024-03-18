import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  private readonly dogs: string[] = ['Bulldog', 'Poodle', 'German Shepherd'];

  findAll(): string[] {
    return this.dogs;
  }
}
