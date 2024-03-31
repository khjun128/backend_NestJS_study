import { Inject, Injectable } from "@nestjs/common";
import { CatsService } from "src/cats/cats.service";

@Injectable()
export class DogsService {
  private readonly dogs: string[] = ["Bulldog", "Poodle", "German Shepherd"];
  @Inject(CatsService) private readonly catsService: CatsService;
  // constructor(private readonly catsService: CatsService) {}

  test(): string[] {
    return this.catsService.findAll();
  }

  findAll(): string[] {
    return this.dogs;
  }
}
