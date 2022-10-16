import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from './entities/category.entity';
import * as uniqueSlug from 'unique-slug';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchCategoryDto } from './dto/search-category';
import { ErrorException } from '@/common/exceptions/error.execption';
import { WarnException } from '@/common/exceptions/warn.exception';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto) {
    const category = new CategoryEntity();

    const { name } = createCategoryDto;
    const slug = this.slugify(name);
    const qb = this.categoryRepository
      .createQueryBuilder('category')
      .where('category.name = :name', { name })
      .orWhere('category.slug = :slug', { slug });

    const categoryOne = await qb.getOne();
    if (categoryOne) {
      throw new ErrorException('category name must be unqiue');
    }

    category.slug = slug;
    category.name = name;

    return await this.categoryRepository.save(category);
  }

  async findAll(query: SearchCategoryDto) {
    const { name, limit, offset } = query;
    const qb = this.categoryRepository.createQueryBuilder('category');
    qb.where('1 = 1');

    if (name) {
      qb.andWhere('category.name LIKE :name', { name: `%${name}%` });
    }
    qb.orderBy('category.created', 'DESC');

    const totalCount = await qb.getCount();

    if (limit) {
      qb.limit(limit);
    }

    if (offset) {
      qb.offset(offset);
    }

    const category = await qb.getMany();

    console.log('category====', category);

    return { category, totalCount };
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const { name } = updateCategoryDto;
    if (name) {
      const slug = this.slugify(name);
      const categoryExit = await this.categoryRepository
        .createQueryBuilder('category')
        .where('category.name = :name', { name })
        .orWhere('category.slug = :slug', { slug });

      if (categoryExit) {
        throw new WarnException(`already exit category name : ${name}`);
      }
    }
    const category = await this.categoryRepository.findOne(id);
    if (!category) {
      throw new WarnException('category is no exit');
    }
    const categoryTemp = Object.assign(category, updateCategoryDto);
    return await this.categoryRepository.save(categoryTemp);
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }

  slugify(str: string) {
    return uniqueSlug(str);
  }
}
