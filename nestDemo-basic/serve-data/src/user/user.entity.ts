import * as crypto from 'crypto';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { IsEmail } from 'class-validator';
import { RoleEntity } from './role.entity';
import { ArticleEntity } from '@/article/entities/article.entity';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ default: '' })
  nickname: string;

  @Column({ default: '' })
  fullname: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  hashPassword() {
    this.password = crypto.createHmac('sha256', this.password).digest('hex');
  }

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;

  @ManyToMany(
    type => RoleEntity,
    role => role.users,
  )
  @JoinTable()
  roles: RoleEntity[];

  @OneToMany(
    type => ArticleEntity,
    article => article.user,
  )
  publishArticles: ArticleEntity[];

  @OneToMany(
    type => ArticleEntity,
    article => article.user,
  )
  articles: ArticleEntity[];
}
