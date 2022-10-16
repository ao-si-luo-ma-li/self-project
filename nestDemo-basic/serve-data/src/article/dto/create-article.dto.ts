import { ArticleStatusEnum } from '@/common/constants/article';
import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, Allow } from 'class-validator';

export class CreateArticleDto {
  @ApiModelProperty({
    description: 'article title',
  })
  @IsNotEmpty()
  readonly title: string;

  @ApiModelProperty({
    description: 'article description',
  })
  @Allow()
  readonly description: string;

  @ApiModelProperty({
    description: 'article detail',
  })
  @Allow()
  readonly detail: string;

  @ApiModelProperty({
    description: 'article status',
    enum: ArticleStatusEnum,
  })
  readonly status: string;
}
