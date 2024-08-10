import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Documentação TODO-API')
    .setDescription(
      'Esta é uma API RESTful para gerenciar uma lista de tarefas (TODO). ' +
        'Ela permite criar, ler, atualizar e excluir tarefas, bem como gerenciar categorias e prioridades. ',
    )
    .setVersion('1.0')
    .addTag('Categorias')
    .addTag('Tarefas')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
  console.log('The aplication is running on http://localhost:3000');
  console.log(
    'The aplication documentation is running on http://localhost:3000/doc',
  );
}
bootstrap();
