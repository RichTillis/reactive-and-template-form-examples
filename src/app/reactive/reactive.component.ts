import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.scss']
})
export class ReactiveComponent implements OnInit {

  productupdateform: FormGroup;
  productlist: Observable<Product[]> = this.productservice.getProductList()
  isEditing = false;

  constructor(private productservice: ProductService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.productupdateform = this.formBuilder.group({
      theProductId: [0],
      theProductName: ['', Validators.required],
      theProductVariety: [''],
      theProductOrigin: ['']
    })
  }

  setProductForm(id: number) {
    const product = this.productservice.getProduct(id);
    this.productupdateform.patchValue({
      theProductId: product.product_id,
      theProductName: product.product_name,
      theProductVariety: product.product_variety,
      theProductOrigin: product.product_origin
    });
    this.productupdateform.updateValueAndValidity();
    this.isEditing = true;
  }

  updateProduct() {
    let product: Product = {
      product_id: this.productupdateform.get('theProductId').value,
      product_name: this.productupdateform.get('theProductName').value,
      product_variety: this.productupdateform.get('theProductVariety').value,
      product_origin: this.productupdateform.get('theProductOrigin').value
    }
    this.productservice.updateProduct(product);
    this.resetForm();
  }

  isFormValid() {
    return true;
  }

  resetForm() {
    this.isEditing = false;
    this.initializeForm();
  }
}
