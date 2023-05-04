import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Res,
} from '@nestjs/common';

import { Response } from 'express';
import { ProductsService } from 'src/services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(@Query('limit') limit = '', @Query('offset') offset: string) {
    // return `products ${limit} ${offset}`;
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter(): string {
    return `I am a filter`;
  }

  @Get('express')
  getProductUsingExpress(@Res() response: Response) {
    return response.status(200).send({ message: `returning using express` });
  }

  @Get(':productId')
  // @HttpCode(HttpStatus.ACCEPTED) // with this only retur the code without data (by confirm)
  // getProduct(@Res() response: Response, @Param('productId') productId: string) {
  getProduct(@Param('productId') productId: string) {
    //response.status(200).send({ message: 'ok' }); //to response like express
    // return `product ${productId}`;
    return this.productsService.findOne(+productId);
  }

  @Post()
  Create(@Body() payload: any) {
    // return {
    //   message: 'create action',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    // return {
    //   id,
    //   payload,
    // };
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
