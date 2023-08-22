import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/domain/product';
import { ProductService } from 'src/service/productservice';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  displayCustom!: boolean;
  products!: Product[];
  activeIndex: number = 0;


  constructor(private product_s: ProductService,public router: Router) {}

  ngOnInit() {
    console.log(history.state);
     const stringa=Object.values( history.state);
     //per togliere il navigationid del historystate
     let stringWithoutLastCharacter =stringa.join('').slice(0, stringa.join('').length - 1);
    this.getData(stringWithoutLastCharacter);
  }
  getproducts(stringa:any):Promise<any>{
    const body: any = {
      categoria: stringa
    };
    return new Promise<any>((resolve, reject) => {
    this.product_s.getProductsByCategory(body).subscribe({
      next: (response: any) => 
      {
        this.products = response;
              console.log(this.products);
              resolve(this.products);
      },
      error: (error:any) => 
      {
  
      }
    });
  });
  }
  getData(body:any): Promise<any> {
    return this.getproducts(body);
  }
  imageClick(index: number) {
      this.activeIndex = index;
  }
}
