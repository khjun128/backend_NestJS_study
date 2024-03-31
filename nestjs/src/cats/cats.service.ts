import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { DogsService } from "src/dogs/dogs.service";

@Injectable()
export class CatsService {
  private readonly cats: string[] = ["Persian", "Siamese"];
  @Inject(forwardRef(() => DogsService))
  private readonly dogsService: DogsService;
  // constructor(
  //   @Inject(forwardRef(() => DogsService))
  //   private readonly dogsService: DogsService
  // ) {}

  test(): string[] {
    return this.dogsService.findAll();
  }

  findAll(): string[] {
    return this.cats;
  }
}
