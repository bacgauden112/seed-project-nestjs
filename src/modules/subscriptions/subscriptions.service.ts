import { Injectable } from '@nestjs/common';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';
import { Subscription } from 'src/entities/subscription.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(Subscription)
    private repo: Repository<Subscription>,
  ) {}
  async create(
    createSubscriptionDto: CreateSubscriptionDto,
  ): Promise<Subscription> {
    const payload = {
      ...createSubscriptionDto,
      activationDate: new Date(createSubscriptionDto.activationDate),
    };
    const newSubscription = await this.repo.create(createSubscriptionDto);
    await this.repo.save(newSubscription);
    return newSubscription;
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOne({
      where: { id },
    });
  }

  update(id: string, updateSubscriptionDto: UpdateSubscriptionDto) {
    return '';
  }

  remove(id: string) {
    return '';
  }
}
