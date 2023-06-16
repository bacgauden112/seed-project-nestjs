import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';
import * as dynamoose from 'dynamoose';
import { Item } from 'dynamoose/dist/Item';
dynamoose.aws.ddb.local('http://localhost:8000');

type Usage = {
  used: number;
  initial: number;
  additional: number;
};

const subscriptionSchema = new dynamoose.Schema(
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
      schema: {
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
      },
      required: true,
    },
    voiceMt: {
      type: Object,
      schema: {
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
      },
      required: true,
    },
    voiceCf: {
      type: Object,
      schema: {
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
      },
      required: true,
    },
    textMo: {
      type: Object,
      schema: {
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
      },
      required: true,
    },
    textMt: {
      type: Object,
      schema: {
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
      },
      required: true,
    },
    vm: {
      type: Object,
      schema: {
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
      },
      required: true,
    },
    data: {
      type: Object,
      schema: {
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
      },
      required: true,
    },
    createdAt: {
      type: Date,
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
  endAt: string;
}

export const SubscriptionModel = dynamoose.model<SubscriptionItem>(
  'subscriptions',
  subscriptionSchema,
);

const data = [];
// for 100 times
for (let i = 0; i < 25; i++) {
  // fake SubscriptionItem data
  const subscriptionItem = {
    id: faker.string.uuid(),
    mdn: faker.phone.number(),
    voiceMo: {
      used: faker.number.int(),
      initial: faker.number.int(),
      additional: faker.number.int(),
    },
    voiceMt: {
      used: faker.number.int(),
      initial: faker.number.int(),
      additional: faker.number.int(),
    },
    voiceCf: {
      used: faker.number.int(),
      initial: faker.number.int(),
      additional: faker.number.int(),
    },
    textMo: {
      used: faker.number.int(),
      initial: faker.number.int(),
      additional: faker.number.int(),
    },
    textMt: {
      used: faker.number.int(),
      initial: faker.number.int(),
      additional: faker.number.int(),
    },
    vm: {
      used: faker.number.int(),
      initial: faker.number.int(),
      additional: faker.number.int(),
    },
    data: {
      used: faker.number.int(),
      initial: faker.number.int(),
      additional: faker.number.int(),
    },
    createdAt: faker.date.past(),
    endAt: faker.date.future(),
    operatorId: faker.number.int(),
  };
  data.push(subscriptionItem);
}

// create
SubscriptionModel.batchPut(data).then((result) => {
  console.log(result);
});
