import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = "List of products";
  //products = [{id:"1",name:"BOOKS"},{id:"2",name:"T-SHIRT"},{id:"3", name:"COMPUTER"}]
  products: Product[] = [];
  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.getListProducts()
  }
  private getListProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data
      }
    )
  }
 
}

