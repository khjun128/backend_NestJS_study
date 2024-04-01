import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { AccountInfoService } from "src/account-info/account-info.service";
import { AccountInfoEntity } from "src/account-info/entities/account-info.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(AccountInfoEntity)
    private readonly accountInfoRepository: Repository<AccountInfoEntity>,
    private readonly accountInfoService: AccountInfoService
  ) {}
  async create(createUserDto: CreateUserDto) {
    const accountInfo = await this.accountInfoService.create();
    const user = new UserEntity();
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.accountInfo = accountInfo;
    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new Error("User not found");
    }
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    return await this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new Error("User not found");
    }
    return await this.userRepository.softRemove(user);
  }
}
