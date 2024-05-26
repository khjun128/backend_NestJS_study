import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createHash } from "crypto";
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
    const { email, name, password } = createUserDto;
    const user = await this.userRepository.findOne({
      where: { email },
    });
    if (user) {
      throw new HttpException(
        "이미 존재하는 이메일입니다.",
        HttpStatus.BAD_REQUEST
      );
    }

    const shasum = createHash("sha1");
    shasum.update(password);
    const hashedPassword = shasum.digest("hex");

    const accountInfo = await this.accountInfoService.create();
    const newUser = new UserEntity();
    newUser.email = email;
    newUser.name = name;
    newUser.password = hashedPassword;
    newUser.accountInfo = accountInfo;
    return await this.userRepository.save(newUser);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new HttpException(
        "사용자가 존재하지 않습니다.",
        HttpStatus.NOT_FOUND
      );
    }
    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    if (!user) {
      throw new HttpException(
        "이메일이 존재하지 않습니다.",
        HttpStatus.NOT_FOUND
      );
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
