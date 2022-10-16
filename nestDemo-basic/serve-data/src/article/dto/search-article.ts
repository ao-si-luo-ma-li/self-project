import { ArticleStatusEnum } from '@/common/constants/article';
import { ApiModelProperty } from '@nestjs/swagger';

export class SearchArticleDto {
  @ApiModelProperty({
    description: 'article title',
  })
  readonly title: string;

  @ApiModelProperty({
    description: 'article status',
    enum: ArticleStatusEnum,
  })
  readonly status: string;

  @ApiModelProperty({
    description: '每次请求返回的文章数量，配合分页效果',
  })
  limit: number;

  @ApiModelProperty({
    description: '查询文章时的偏移量，配合分页效果',
  })
  offset: number;
}
