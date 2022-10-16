import { CategoryEntity } from '@/category/entities/category.entity';
import { ArticleStatusEnum } from '@/common/constants/article';
import { UserEntity } from '@/user/user.entity';
import {
  Entity,
  Column,
  BeforeUpdate,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';

@Entity('article')
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  detail: string;

  @Column()
  status: ArticleStatusEnum;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;

  @Column()
  sort: number;

  @BeforeUpdate()
  updateTimestamp() {
    this.updated = new Date();
  }

  @ManyToOne(
    type => UserEntity,
    user => user.articles,
  )
  user: UserEntity;

  @ManyToMany(
    type => CategoryEntity,
    category => category.article,
  )
  category: CategoryEntity[];
}
