import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccountInfoModule } from "./account-info/account-info.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { CategoryModule } from "./category/category.module";
import { typeORMConfig } from "./config/typeorm.config";
import { PostingModule } from "./posting/posting.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    UserModule,
    AccountInfoModule,
    PostingModule,
    CategoryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
