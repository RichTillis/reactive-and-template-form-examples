import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {
  productlist: Observable<Product[]> = this.productservice.getProductList();
  isEditing = false;
  product_id: number;
  product_name: string;
  product_variety: string;
  product_origin: string;

  constructor(private productservice: ProductService) { }

  setProductForm(id: number) {
    const product: Product = this.productservice.getProduct(id);
    this.product_id = product.product_id;
    this.product_name = product.product_name;
    this.product_variety = product.product_variety;
    this.product_origin = product.product_origin;
    this.isEditing = true;
  }

  updateProduct() {
    let product: Product = new Product();
    product.product_id = this.product_id;
    product.product_name = this.product_name;
    product.product_origin = this.product_origin;
    product.product_variety = this.product_variety;
    this.productservice.updateProduct(product);
    this.resetForm();
  }

  resetForm() {
    this.isEditing = false;
    this.product_id = null;
    this.product_name = null;
    this.product_variety = null;
    this.product_origin = null;
  }
}
