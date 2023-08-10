import { Component } from '@angular/core';
import { Product } from '../../domain/product';
import { ProductService } from '../../service/productservice';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  firstbannerproducts!: Product[] ;
  secondbannerproducts!: Product[] ;

  responsiveOptions: any[] | undefined;

  constructor(private productService: ProductService) {}
  isFavorite: boolean = false;

  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit() {
   let firstbannerproducts: Product[] = [];
   let secondbannerproducts: Product[] = [];

      this.productService.getProductsSmall().then((products) => {
        for(const element of products){
            if(element.category.includes("football")){
                secondbannerproducts.push(element);
            }
            else{
                firstbannerproducts.push(element);
            }
        }
          this.firstbannerproducts = firstbannerproducts;
          this.secondbannerproducts = secondbannerproducts;
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
              numVisible: 2,
              numScroll: 2
          },
          {
            breakpoint: '844px',
            numVisible: 2,
            numScroll: 2
        },
       
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
