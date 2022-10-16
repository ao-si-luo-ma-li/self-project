import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  Header,
  UsePipes,
  ValidationPipe,
  Request,
} from '@nestjs/common';
import {
  ApiImplicitQuery,
  ApiOperation,
  ApiResponse,
  ApiUseTags,
} from '@nestjs/swagger';
import { ArticlesRO } from './article.interface';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import {
  UpdateArticleCategory,
  UpdateArticleDto,
} from './dto/update-article.dto';

@ApiUseTags('articles')
@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @ApiOperation({ title: 'Create article' })
  @ApiResponse({
    status: 201,
    description: 'The article has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  @Post()
  async create(@Body() createArticleDto: CreateArticleDto, @Request() req) {
    return this.articleService.create(createArticleDto, req.user.id);
  }

  @ApiOperation({ title: 'Get all articles' })
  @ApiImplicitQuery({
    name: 'title',
    type: 'string',
    description: 'article title',
    required: false,
  })
  @ApiResponse({ status: 200, description: 'Return all articles.' })
  @Get()
  @Header('Cache-Control', 'no-cache')
  async findAll(@Query() query): Promise<ArticlesRO> {
    return await this.articleService.findAll(query);
  }

  @ApiOperation({ title: 'Get request-user articles' })
  @ApiImplicitQuery({
    name: 'title',
    type: 'string',
    description: 'article title',
    required: false,
  })
  @ApiResponse({ status: 200, description: 'Return request-user articles.' })
  @Get('/self')
  @Header('Cache-Control', 'no-cache')
  async findCurrentUserArticle(
    @Query() query,
    @Request() req,
  ): Promise<ArticlesRO> {
    const { id } = req.user;
    return await this.articleService.findRequestUserArticle(query, id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articleService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id);
  }

  @Post(':id/category')
  async updateArticleCategory(
    @Param('id') id: number,
    @Body() body: UpdateArticleCategory,
  ) {
    return await this.articleService.updateCategory(id, body);
  }
}
