import { ApiModelProperty } from '@nestjs/swagger';
import { Allow, IsNotEmpty } from 'class-validator';

export class UpdateProductDto {
  @ApiModelProperty({
    description: 'product name',
  })
  @IsNotEmpty()
  readonly name: string;

  @ApiModelProperty()
  @Allow()
  readonly description: string;
}
