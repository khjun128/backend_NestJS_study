import { Role, Status } from "../entities/account-info.entity";

export class CreateAccountInfoDto {
  status: Status;
  role: Role;
  name?: string;
  age?: number;
}
