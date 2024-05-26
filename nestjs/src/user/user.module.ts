import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountInfoModule } from "src/account-info/account-info.module";
import { AccountInfoEntity } from "src/account-info/entities/account-info.entity";
import { UserEntity } from "./entities/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, AccountInfoEntity]),
    forwardRef(() => AccountInfoModule),
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
