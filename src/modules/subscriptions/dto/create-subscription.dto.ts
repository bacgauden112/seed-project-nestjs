export class CreateSubscriptionDto {
  id: number;
  mdn: string;
  subscriberId: number;
  tariffCode: string;
  planCode: string;
  MRCPrice: number;
  operatorName: string;
  voiceMoInitial: number;
  voiceMtInitial: number;
  voiceCfInitial: number;
  smsMoInitial: number;
  smsMtInitial: number;
  vmInitial: number;
  dataInitial: number;
  activationDate: Date;
}
