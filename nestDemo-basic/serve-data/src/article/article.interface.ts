import { ArticleEntity } from './entities/article.entity';

export interface ArticleRO {
  article: ArticleEntity;
}

export interface ArticlesRO {
  articles: ArticleEntity[];
  totalCount: number;
}

export type ArticleCreateByUserRO = Omit<
  ArticleEntity,
  'user' | 'updateTimestamp'
> & { userId: number };
