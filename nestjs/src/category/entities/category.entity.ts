import { PostingEntity } from "src/posting/entities/posting.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "categories" })
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => PostingEntity, (posting) => posting.categories)
  @JoinColumn()
  postings: PostingEntity[];
}
