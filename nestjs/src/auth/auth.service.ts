import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { createHash } from "crypto";
import { UserService } from "src/user/user.service";
import { LoginDto } from "./dto/login.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.validate(loginDto);
    const payload = { email: user.email, sub: user.id };
    return this.jwtService.sign(payload);
  }

  async validate(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userService.findOneByEmail(email);

    const shasum = createHash("sha1");
    shasum.update(password);
    const hashedPassword = shasum.digest("hex");

    if (!user || user.password !== hashedPassword) {
      throw new HttpException("Invalid credentials", HttpStatus.BAD_REQUEST);
    } else {
      return user;
    }
  }
}
