import { Usage } from '../types/subscription.type';

export class CreateSubscriptionDto {
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
  endAt: string;
}
