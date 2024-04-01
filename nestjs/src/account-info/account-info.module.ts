import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountInfoController } from "./account-info.controller";
import { AccountInfoService } from "./account-info.service";
import { AccountInfoEntity } from "./entities/account-info.entity";

@Module({
  controllers: [AccountInfoController],
  imports: [TypeOrmModule.forFeature([AccountInfoEntity])],
  providers: [AccountInfoService],
  exports: [AccountInfoService],
})
export class AccountInfoModule {}
