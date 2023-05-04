import { Injectable, NotFoundException } from '@nestjs/common';

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
    const product = this.products.find((item) => item.id === id);

    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }

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

  update(id: number, payload: any): Product {
    const productIndex = this.products.findIndex((item) => item.id === id);

    if (productIndex === -1) {
      return null;
    }

    this.products[productIndex] = {
      ...this.products[productIndex],
      ...payload,
    };

    return this.products[productIndex];
  }

  delete(id: number): Product {
    const productIndex = this.products.findIndex((item) => item.id === id);

    if (productIndex === -1) {
      throw new NotFoundException(`Product #${id} not found`);
    }

    const [product] = this.products.splice(productIndex, 1);

    return product;
  }
}
