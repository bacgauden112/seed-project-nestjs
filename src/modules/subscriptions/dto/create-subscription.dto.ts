import { ApiProperty } from '@nestjs/swagger';
import { Usage } from '../types/subscription.type';

export class CreateSubscriptionDto {
  @ApiProperty()
  mdn: string;
  @ApiProperty()
  voiceMo: Usage;
  @ApiProperty()
  voiceMt: Usage;
  @ApiProperty()
  voiceCf: Usage;
  @ApiProperty()
  textMo: Usage;
  @ApiProperty()
  textMt: Usage;
  @ApiProperty()
  vm: Usage;
  @ApiProperty()
  data: Usage;
  @ApiProperty()
  operatorId: number;
  @ApiProperty()
  endAt: string;
}
