import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, Allow } from 'class-validator';

export class CreateProductDto {
  @ApiModelProperty({
    description: 'product name',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiModelProperty({
    description: 'product description',
  })
  @Allow()
  readonly description: string;
}
