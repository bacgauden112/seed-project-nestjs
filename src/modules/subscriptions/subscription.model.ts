import * as dynamoose from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';
import { SubscriptionSchema } from './subscription.schema';
import { Usage } from './types/subscription.type';
import { ApiProperty } from '@nestjs/swagger';

export class SubscriptionItem extends Item {
  @ApiProperty({
    example: 'e41e33e6-e353-4439-ab0a-ed204b18f936',
    description: 'subscription id',
  })
  id: string;
  @ApiProperty({ example: '2028888888', description: 'end user phone number' })
  mdn: string;
  @ApiProperty({ description: 'voiceMo used data' })
  voiceMo: Usage;
  @ApiProperty({ description: 'voiceMt used data' })
  voiceMt: Usage;
  @ApiProperty({ description: 'voiceCf used data' })
  voiceCf: Usage;
  @ApiProperty({ description: 'textMo used data' })
  textMo: Usage;
  @ApiProperty({ description: 'textMt used data' })
  textMt: Usage;
  @ApiProperty({ description: 'voice mail used data' })
  vm: Usage;
  @ApiProperty({ description: 'data used data' })
  data: Usage;
  @ApiProperty({ description: 'operator id' })
  operatorId: number;
  @ApiProperty({ description: 'created at' })
  createdAt: string;
  @ApiProperty({ description: 'end at' })
  endAt: Date;
}

export const SubscriptionModel = dynamoose.model<SubscriptionItem>(
  'subscriptions',
  SubscriptionSchema,
);
