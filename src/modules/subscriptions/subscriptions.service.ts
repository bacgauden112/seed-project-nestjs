import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { SubscriptionItem, SubscriptionModel } from './subscription.model';
import { v4 } from 'uuid';
@Injectable()
export class SubscriptionsService {
  async create(
    createSubscriptionDto: CreateSubscriptionDto,
  ): Promise<SubscriptionItem> {
    const payload = {
      ...createSubscriptionDto,
      id: v4(),
      endAt: new Date(createSubscriptionDto.endAt),
    };
    return SubscriptionModel.create(payload);
  }

  findAll() {
    return SubscriptionModel.scan().exec();
  }

  findOne(id: string) {
    return SubscriptionModel.get({ id });
  }

  update(id: string, updateSubscriptionDto: UpdateSubscriptionDto) {
    const updateData = {
      ...updateSubscriptionDto,
      endAt: new Date(updateSubscriptionDto.endAt),
    };
    return SubscriptionModel.update({ id }, updateData);
  }

  remove(id: string) {
    return SubscriptionModel.delete({ id });
  }
}
