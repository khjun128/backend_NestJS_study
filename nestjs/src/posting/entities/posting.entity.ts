import { AccountInfoEntity } from "src/account-info/entities/account-info.entity";
import { CategoryEntity } from "src/category/entities/category.entity";
import { UserEntity } from "src/user/entities/user.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "postings" })
export class PostingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => AccountInfoEntity, (accountInfo) => accountInfo.postings)
  @JoinColumn({ name: "writer_id" })
  writer: UserEntity;

  @ManyToMany(() => CategoryEntity, (category) => category.postings)
  @JoinColumn()
  categories: CategoryEntity[];
}
