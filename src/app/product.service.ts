import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  products: Product[] = [];

  constructor() {
    this.products = [
      { product_id: 1, product_name: 'shovel', product_variety: 'garden', product_origin: 'down the street' },
      { product_id: 2, product_name: 'shovel', product_variety: 'construction', product_origin: 'earth' },
      { product_id: 3, product_name: 'rake', product_variety: 'garden', product_origin: 'new york' }
    ]
  }

  getProductList(): Observable<Product[]> {
    return of(this.products);
  }

  getProduct(id: number): Product {
    const index = this.findProductIndex(id);
    return this.products[index];
  }

  updateProduct(product: Product): void {
    const index = this.findProductIndex(product.product_id);
    this.products[index] = product;
  }

  private findProductIndex(id: number): number {
    return this.products.findIndex((p: Product) => {
      return p.product_id === id
    });
  }
}
