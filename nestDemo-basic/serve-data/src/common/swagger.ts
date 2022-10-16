// api文档插件
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// DocumentBuilder是一个辅助类，有助于结构的基本文件SwaggerModule。它包含几种方法，可用于设置诸如标题，描述，版本等属性。
const options = new DocumentBuilder()
  .setTitle('NestJS serve-data API')
  .setDescription('The API description')
  .setVersion('1.0')
  .setBasePath('api')
  .addBearerAuth()
  .build();

export const initSwagger = (app: any) => {
  // 为了创建完整的文档（具有定义的HTTP路由），我们使用类的createDocument()方法SwaggerModule。此方法带有两个参数，分别是应用程序实例和基本Swagger选项。
  const document = SwaggerModule.createDocument(app, options);
  // 最后一步是setup()。它依次接受（1）装入Swagger的路径，（2）应用程序实例, （3）描述Nest应用程序的文档。
  SwaggerModule.setup('/docs', app, document);
};
