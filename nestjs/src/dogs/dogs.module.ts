import { Module, forwardRef } from "@nestjs/common";
import { CatsModule } from "src/cats/cats.module";
import { DogsController } from "./dogs.controller";
import { DogsService } from "./dogs.service";

@Module({
  imports: [forwardRef(() => CatsModule)],
  controllers: [DogsController],
  providers: [DogsService],
  exports: [DogsService],
})
export class DogsModule {}
