import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

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

  @Get(':productId')
  getProduct(@Param('productId') productId: string): string {
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
