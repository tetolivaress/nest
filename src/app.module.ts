import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products/products.controller';
import { CategoriesController } from './controllers/categories/categories.controller';
import { UsersController } from './controllers/users/users.controller';
import { OrdersController } from './controllers/orders/orders.controller';
import { CustomersController } from './controllers/customers/customers.controller';
import { BrandsController } from './controllers/brands/brands.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    UsersController,
    OrdersController,
    CustomersController,
    BrandsController,
  ],
  providers: [AppService],
})
export class AppModule {}
