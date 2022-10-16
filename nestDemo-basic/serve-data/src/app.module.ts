import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProductModule } from './product/product.module';
import { HealthModule } from './health/health.module';
import { LoggerModule } from './logger/logger.module';
import { RedisModule } from './redis/redis.module';
import { ElasticSearchModule } from './elasticsearch/elasticsearch.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { ArticleModule } from './article/article.module';
import { CategoryModule } from './category/category.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    HealthModule,
    ConfigModule,
    // RedisModule,
    // ElasticSearchModule.registerAsync({
    //   imports:[ConfigModule],
    //   useFactory:async (ConfigService:ConfigService)=>(ConfigService.getESConfig()),
    //   inject:[ConfigService]
    // }),
    LoggerModule,
    UserModule,
    ProductModule,
    ArticleModule,
    CategoryModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  public static port: number;

  constructor(
    private readonly connection: Connection,
    private readonly config: ConfigService,
  ) {
    AppModule.port = config.getPort();
  }
}
