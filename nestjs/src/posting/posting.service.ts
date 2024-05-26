import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserService } from "src/user/user.service";
import { Repository } from "typeorm";
import { CreatePostingDto } from "./dto/create-posting.dto";
import { UpdatePostingDto } from "./dto/update-posting.dto";
import { PostingEntity } from "./entities/posting.entity";

@Injectable()
export class PostingService {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(PostingEntity)
    private readonly postingRepository: Repository<PostingEntity>
  ) {}

  async create(userId: number, createPostingDto: CreatePostingDto) {
    const user = await this.userService.findOne(userId);
    if (!user) {
      throw new Error("사용자가 존재하지 않습니다.");
    }
    const { title, content } = createPostingDto;
    console.log(user);
    const posting = await this.postingRepository.save({
      title,
      content,
      writer: user,
    });
    return posting;
  }

  findAll() {
    return `This action returns all posting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} posting`;
  }

  update(id: number, updatePostingDto: UpdatePostingDto) {
    return `This action updates a #${id} posting`;
  }

  remove(id: number) {
    return `This action removes a #${id} posting`;
  }
}
