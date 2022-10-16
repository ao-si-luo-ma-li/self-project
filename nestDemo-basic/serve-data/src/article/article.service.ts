import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, getRepository, IsNull, Like, Not, Repository } from 'typeorm';
import { ArticleCreateByUserRO, ArticlesRO } from './article.interface';
import { CreateArticleDto } from './dto/create-article.dto';
import {
  UpdateArticleCategory,
  UpdateArticleDto,
} from './dto/update-article.dto';
import { ArticleEntity } from './entities/article.entity';
import * as uniqueSlug from 'unique-slug';
import { ErrorException } from '@/common/exceptions/error.execption';
import _ = require('lodash');
import { ArticleStatusEnum } from '@/common/constants/article';
import { UserEntity } from '@/user/user.entity';
import { SearchArticleDto } from './dto/search-article';
import { WarnException } from '@/common/exceptions/warn.exception';
import { CategoryEntity } from '@/category/entities/category.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articleRepository: Repository<ArticleEntity>,
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(
    createArticleDto: CreateArticleDto,
    userId: string,
  ): Promise<ArticleCreateByUserRO> {
    let article = new ArticleEntity();
    const { title } = createArticleDto;

    // check unique of article.slug and title
    const slug = this.slugify(title);
    const qb = await this.articleRepository
      .createQueryBuilder('article')
      .where('article.slug = :slug', { slug })
      .orWhere('article.title = :title', { title });

    const articleOne = await qb.getOne();

    if (articleOne) {
      throw new ErrorException('article title must be unique');
    }

    article = Object.assign(
      _.pick(createArticleDto, ['title', 'description', 'detail', 'status']),
    );

    article.slug = slug;
    article.status = ArticleStatusEnum.draft;

    // 绑定创建文章的用户。一般就是当前进行请求的用户
    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.id = :id', { id: userId })
      .getOne();

    article.user = user;

    const {
      user: articleUser,
      ...articleContent
    } = await this.articleRepository.save(article);

    return { ...articleContent, userId: articleUser.id };
  }

  async findAll(query: SearchArticleDto): Promise<ArticlesRO> {
    const qb = await this.articleRepository.createQueryBuilder('article');
    qb.where('1 = 1');

    if ('title' in query) {
      qb.andWhere('article.title LIKE :title', { title: `%${query.title}%` });
    }

    if ('status' in query) {
      qb.andWhere('article.status = :status', { status: `%${query.status}%` });
    }

    qb.orderBy('article.created', 'DESC');

    const totalCount = await qb.getCount();

    if ('limit' in query) {
      qb.limit(query.limit);
    }

    if ('offset' in query) {
      qb.offset(query.offset);
    }

    const articles = await qb.getMany();

    return { articles, totalCount };
  }

  async findRequestUserArticle(
    query: SearchArticleDto,
    userId: string,
  ): Promise<ArticlesRO> {
    const { title, status } = query;

    const qb = await this.articleRepository
      .createQueryBuilder('article')
      .leftJoinAndSelect('article.user', 'user')
      .where('user.id', { id: userId });

    if (title) {
      qb.andWhere('article.title LIKE :title', { title: `%${title}%` });
    }

    if (status) {
      qb.andWhere('article.status = :status', { status });
    }

    qb.orderBy('article.created', 'DESC');

    const totalCount = await qb.getCount();

    if ('limit' in query) {
      qb.limit(query.limit);
    }

    if ('offset' in query) {
      qb.offset(query.offset);
    }

    const articles = await qb.getMany();

    return {
      articles,
      totalCount,
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} article`;
  }

  async update(
    id: number,
    updateArticleDto: UpdateArticleDto,
  ): Promise<ArticleCreateByUserRO> {
    const article = await this.articleRepository.find({
      where: { id },
      relations: ['user'],
    });

    if (!(article && article.length > 0)) {
      throw new Error('article is not exit');
    }
    const updatedArticle: ArticleEntity = Object.assign(
      article[0],
      updateArticleDto,
    );

    const {
      user: articleUser,
      ...articleContent
    } = await this.articleRepository.save(updatedArticle);

    return { ...articleContent, userId: articleUser.id };
  }

  remove(id: number) {
    return `This action removes a #${id} article`;
  }

  async updateCategory(id: number, body: UpdateArticleCategory) {
    const { cagetoryIds } = body;
    const article = await this.articleRepository
      .createQueryBuilder('article')
      .leftJoinAndSelect('article.category', 'category')
      .where('article.id = :id', { id })
      .getOne();
    if (!article) {
      throw new WarnException('article is not exit');
    }

    const categoryToSet = await this.categoryRepository.findByIds(cagetoryIds);
    if (!categoryToSet) {
      throw new WarnException('category is not exit');
    }

    article.category = categoryToSet;

    return await this.articleRepository.save(article);
  }

  slugify(str: string) {
    return uniqueSlug(str);
  }
}
