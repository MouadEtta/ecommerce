import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products!: Product[] ;

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit() {
      this.productService.getProductsSmall().then((products) => {
          this.products = products;
          console.log(products);
      });

      this.responsiveOptions = [
          {
              breakpoint: '1400px',
              numVisible: 3,
              numScroll: 3
          },
          {
              breakpoint: '1220px',
              numVisible: 2,
              numScroll: 2
          },
          {
              breakpoint: '1100px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }

  getSeverity(status: string) {
      switch (status) {
          case 'INSTOCK':
              return 'success';
          case 'LOWSTOCK':
              return 'warning';
          case 'OUTOFSTOCK':
              return 'danger';
          default:
            return 'shutup';
      }
    
  }
}
