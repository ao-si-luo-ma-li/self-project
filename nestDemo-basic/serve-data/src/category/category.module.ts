import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from './entities/category.entity';
import { AuthMiddleware } from '@/user/auth.middleware';
import { UserModule } from '@/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity]), UserModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(CategoryController);
  }
}
