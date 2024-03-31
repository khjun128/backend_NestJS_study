import { Module, forwardRef } from "@nestjs/common";
import { DogsModule } from "src/dogs/dogs.module";
import { CatsController } from "./cats.controller";
import { CatsService } from "./cats.service";

@Module({
  imports: [forwardRef(() => DogsModule)],
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
