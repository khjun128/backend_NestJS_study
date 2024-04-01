import { PostingEntity } from "src/posting/entities/posting.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum Status {
  ACTIVE = "active",
  INACTIVE = "inactive",
}

export enum Role {
  ADMIN = "admin",
  USER = "user",
}

@Entity({ name: "account_info" })
export class AccountInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: Status, default: Status.ACTIVE })
  status: Status;

  @Column({ type: "enum", enum: Role, default: Role.USER })
  role: Role;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  age: number;

  @OneToMany(() => PostingEntity, (posting) => posting.writer)
  postings: PostingEntity[];
}
