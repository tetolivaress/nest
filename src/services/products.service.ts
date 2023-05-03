import { Injectable } from '@nestjs/common';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla bla',
      price: 122,
      stock: 12,
      image: '',
    },
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any): Product {
    const newProduct = {
      id: this.products.length + 1,
      ...payload,
    };

    this.products.push(newProduct);

    return newProduct;
  }
}
