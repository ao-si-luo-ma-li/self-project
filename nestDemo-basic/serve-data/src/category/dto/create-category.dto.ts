import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @ApiModelProperty({ description: '分类名称' })
  @IsNotEmpty()
  readonly name: string;
}
