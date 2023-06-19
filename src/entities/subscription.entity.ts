import { IsNumber } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from './base-entity';

@Entity('subscriptions')
export class Subscription extends BaseEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'mdn', type: 'varchar', length: 20, nullable: false })
  mdn: string;

  @Column({ name: 'subscriber_id', nullable: false })
  subscriberId: number;

  @Column({ name: 'tariff_code', type: 'varchar', length: 20, nullable: false })
  tariffCode: string;

  @Column({ name: 'plan_code', type: 'varchar', length: 20, nullable: false })
  planCode: string;

  @Column({ name: 'mrc_price', nullable: false })
  MRCPrice: number;

  @Column({
    name: 'operator_name',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  operatorName: string;

  @Column({ name: 'life_cycle', type: 'integer', nullable: false, default: 0 })
  lifeCycle: number;

  @Column({
    name: 'voice_mo_used',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  voiceMoUsed: number;

  @Column({
    name: 'voice_mo_initial',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  voiceMoInitial: number;

  @Column({
    name: 'voice_mo_additional',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  voiceMoAdditional: number;

  @Column({
    name: 'voice_mt_used',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  voiceMtUsed: number;

  @Column({
    name: 'voice_mt_initial',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  voiceMtInitial: number;

  @Column({
    name: 'voice_mt_additional',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  voiceMtAdditional: number;

  @Column({
    name: 'voice_cf_used',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  voiceCfUsed: number;

  @Column({
    name: 'voice_cf_initial',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  voiceCfInitial: number;

  @Column({
    name: 'voice_cf_additional',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  voiceCfAdditional: number;

  @Column({ name: 'sms_mo_used', type: 'integer', nullable: false, default: 0 })
  smsMoUsed: number;

  @Column({
    name: 'sms_mo_initial',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  smsMoInitial: number;

  @Column({
    name: 'sms_mo_additional',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  smsMoAdditional: number;

  @Column({ name: 'sms_mt_used', type: 'integer', nullable: false, default: 0 })
  smsMtUsed: number;

  @Column({
    name: 'sms_mt_initial',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  smsMtInitial: number;

  @Column({
    name: 'sms_mt_additional',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  smsMtAdditional: number;

  @Column({ name: 'vm_used', type: 'integer', nullable: false, default: 0 })
  vmUsed: number;

  @Column({ name: 'vm_initial', type: 'integer', nullable: false, default: 0 })
  vmInitial: number;

  @Column({
    name: 'vm_additional',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  vmAdditional: number;

  @Column({ name: 'data_used', type: 'integer', nullable: false, default: 0 })
  dataUsed: number;

  @Column({
    name: 'data_initial',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  dataInitial: number;

  @Column({
    name: 'data_additional',
    type: 'integer',
    nullable: false,
    default: 0,
  })
  dataAdditional: number;

  @CreateDateColumn({ name: 'activation_date', nullable: true })
  activationDate: Date;

  @Column({ name: 'end_at', nullable: true, default: null })
  endAt: Date;
}
