import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dynamoose from 'dynamoose';

async function bootstrap() {
  if (process.env.NODE_ENV === 'development') {
    dynamoose.aws.ddb.local('http://localhost:8000');
  } else {
    new dynamoose.aws.ddb.DynamoDB({
      credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID || 'AKAIAI6Q',
        secretAccessKey: process.env.SECRET_ACCESS_KEY || '7QW',
      },
      region: process.env.REGION || 'us-east-1',
    });
  }
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
