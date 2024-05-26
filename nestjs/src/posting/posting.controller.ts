import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from "@nestjs/common";
import { JwtGuard } from "src/auth/guard/jwt.guard";
import { CreatePostingDto } from "./dto/create-posting.dto";
import { UpdatePostingDto } from "./dto/update-posting.dto";
import { PostingService } from "./posting.service";

@Controller("posting")
export class PostingController {
  constructor(private readonly postingService: PostingService) {}

  @UseGuards(JwtGuard)
  @Post(":userId")
  create(
    @Param("userId") userId: number,
    @Body() createPostingDto: CreatePostingDto
  ) {
    return this.postingService.create(userId, createPostingDto);
  }

  @Get()
  findAll() {
    return this.postingService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.postingService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePostingDto: UpdatePostingDto) {
    return this.postingService.update(+id, updatePostingDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.postingService.remove(+id);
  }
}
