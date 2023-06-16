import * as dynamoose from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';
import { SubscriptionSchema } from './subscription.schema';
import { Usage } from './types/subscription.type';

export class SubscriptionItem extends Item {
  id: string;
  mdn: string;
  voiceMo: Usage;
  voiceMt: Usage;
  voiceCf: Usage;
  textMo: Usage;
  textMt: Usage;
  vm: Usage;
  data: Usage;
  operatorId: number;
  startAt: string;
  endAt: Date;
}

export const SubscriptionModel = dynamoose.model<SubscriptionItem>(
  'subscriptions',
  SubscriptionSchema,
);
