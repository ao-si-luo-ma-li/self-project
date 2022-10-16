import { ApiModelProperty } from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends CreateArticleDto {}

export class UpdateArticleCategory {
  @ApiModelProperty()
  cagetoryIds: number[];
}
