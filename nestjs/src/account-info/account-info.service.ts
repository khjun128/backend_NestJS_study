import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateAccountInfoDto } from "./dto/create-account-info.dto";
import { UpdateAccountInfoDto } from "./dto/update-account-info.dto";
import { AccountInfoEntity } from "./entities/account-info.entity";

@Injectable()
export class AccountInfoService {
  constructor(
    @InjectRepository(AccountInfoEntity)
    private readonly accountInfoRepository: Repository<AccountInfoEntity>
  ) {}
  create(createAccountInfoDto?: CreateAccountInfoDto) {
    const accountInfo = new AccountInfoEntity();
    if (createAccountInfoDto) {
      accountInfo.status = createAccountInfoDto.status;
      accountInfo.role = createAccountInfoDto.role;
      accountInfo.name = createAccountInfoDto.name;
      accountInfo.age = createAccountInfoDto.age;
    }
    return this.accountInfoRepository.save(accountInfo);
  }

  findAll() {
    return `This action returns all accountInfo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountInfo`;
  }

  update(id: number, updateAccountInfoDto: UpdateAccountInfoDto) {
    return `This action updates a #${id} accountInfo`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountInfo`;
  }
}
