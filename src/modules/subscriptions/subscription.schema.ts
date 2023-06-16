import { Schema } from 'dynamoose/dist/Schema';

const UsageSchema = new Schema({
  used: {
    type: Number,
    required: true,
  },
  initial: {
    type: Number,
    required: true,
  },
  additional: {
    type: Number,
    required: true,
  },
});

export const SubscriptionSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    mdn: {
      type: String,
      required: true,
    },
    voiceMo: {
      type: Object,
      schema: UsageSchema,
      required: true,
    },
    voiceMt: {
      type: Object,
      schema: UsageSchema,
      required: true,
    },
    voiceCf: {
      type: Object,
      schema: UsageSchema,
      required: true,
    },
    textMo: {
      type: Object,
      schema: UsageSchema,
      required: true,
    },
    textMt: {
      type: Object,
      schema: UsageSchema,
      required: true,
    },
    vm: {
      type: Object,
      schema: UsageSchema,
      required: true,
    },
    data: {
      type: Object,
      schema: UsageSchema,
      required: true,
    },
    endAt: {
      type: Date,
      required: true,
    },
    operatorId: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: {
        created_at: {
          type: {
            value: Date,
            settings: {
              storage: 'iso',
            },
          },
        },
      },
      updatedAt: {
        updated_at: {
          type: {
            value: Date,
            settings: {
              storage: 'iso',
            },
          },
        },
      },
    },
  },
);
