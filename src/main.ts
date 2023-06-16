import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
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

  const config = new DocumentBuilder()
    .setTitle('Billing api')
    .setDescription('The Billing API description')
    .setVersion('1.0')
    .addTag('billings')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
