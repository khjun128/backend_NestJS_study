import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtStrategy } from "./strategy/jwt.strategy";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: "secret",
      signOptions: { expiresIn: "14d" },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,
    // JwtGuard
  ],
  exports: [AuthService],
})
export class AuthModule {}
