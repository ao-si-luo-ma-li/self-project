import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';
import { ArticleEntity } from './entities/article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthMiddleware } from '@/user/auth.middleware';
import { UserModule } from '@/user/user.module';
import { UserEntity } from '@/user/user.entity';
import { CategoryEntity } from '@/category/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ArticleEntity, UserEntity, CategoryEntity]),
    UserModule,
    // RedisModule
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(ArticleController);
  }
}
