import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "src/user/user.module";
import { PostingEntity } from "./entities/posting.entity";
import { PostingController } from "./posting.controller";
import { PostingService } from "./posting.service";

@Module({
  imports: [UserModule, TypeOrmModule.forFeature([PostingEntity])],
  controllers: [PostingController],
  providers: [PostingService],
})
export class PostingModule {}
