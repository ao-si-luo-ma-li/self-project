import { ApiModelProperty } from '@nestjs/swagger';

export class SearchCategoryDto {
  @ApiModelProperty({
    description: 'categroy name',
  })
  readonly name: string;

  @ApiModelProperty({
    description: '每次请求返回的分类数量，配合分页效果',
  })
  limit: number;

  @ApiModelProperty({
    description: '查询分类时的偏移量，配合分页效果',
  })
  offset: number;
}
