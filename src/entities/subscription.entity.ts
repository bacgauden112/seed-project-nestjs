import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('subscriptions')
export class Subscription {
  @PrimaryGeneratedColumn()
  @PrimaryColumn({ type: 'bigint', nullable: false })
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  planName: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  planCode: string;

  @Column({ type: 'integer', nullable: false })
  voiceUsed: number;

  @Column({ type: 'integer', nullable: false })
  textUsed: number;

  @Column({ type: 'integer', nullable: false })
  dataUsed: number;

  @Column({ type: 'integer', nullable: false })
  MRCPrice: number;

  @Column({ type: 'integer', nullable: true })
  additionalVoice: number;

  @Column({ type: 'integer', nullable: true })
  additionalText: number;

  @Column({ type: 'integer', nullable: true })
  additionalData: number;

  @CreateDateColumn({ nullable: true })
  createdAt?: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt?: Date;
}
