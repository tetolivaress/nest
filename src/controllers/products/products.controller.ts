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

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = '',
    @Query('offset') offset: string,
  ): string {
    return `products ${limit} ${offset}`;
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
  @HttpCode(HttpStatus.ACCEPTED)
  getProduct(
    @Res() response: Response,
    @Param('productId') productId: string,
  ): string {
    //response.status(200).send({ message: 'ok' }); //to response like express
    return `product ${productId}`;
  }


  @Post()
  Create(@Body() payload: any) {
    return {
      message: 'create action',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      id,
    };
  }
}
