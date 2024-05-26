import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from "dotenv";
dotenv.config();

export const typeORMConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: process.env.DB_PASS,
  database: "nestjs",
  entities: [__dirname + "/../**/*.entity{.ts,.js}"],
  // autoLoadEntities: true,
  synchronize: true,
};
