import { Body, Controller, Get, Param, Patch } from "@nestjs/common";
import { AccountInfoService } from "./account-info.service";
import { UpdateAccountInfoDto } from "./dto/update-account-info.dto";

@Controller("account-info")
export class AccountInfoController {
  constructor(private readonly accountInfoService: AccountInfoService) {}

  @Get()
  findAll() {
    return this.accountInfoService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.accountInfoService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateAccountInfoDto: UpdateAccountInfoDto
  ) {
    return this.accountInfoService.update(+id, updateAccountInfoDto);
  }
}
