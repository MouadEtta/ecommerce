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
    firstbannerproducts!: Product[];
    secondbannerproducts!: Product[];
    productsSale!: Product[];
  
    responsiveOptions: any[] | undefined;

    constructor(private productService: ProductService) { }
    isFavorite: boolean = false;

    toggleFavorite() {
        this.isFavorite = !this.isFavorite;
    }

    ngOnInit() {
        let firstbannerproducts: Product[] = [];
        let secondbannerproducts: Product[] = [];
        this.getproducts();

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
    getproducts() : Promise<any> {
        return new Promise<any>((resolve, reject) => {
          this.productService.getProductsSale().subscribe({
            next: (response: any) => 
            {
              this.productsSale = response;
              this.productBanner(this.productsSale);
              console.log(this.productsSale);
              resolve(this.productsSale);
            },
            error: (error: any) => 
            {
              reject(error);
            }
          });
        });
      }
    productBanner(productsSale: Product[]) {
        this.firstbannerproducts = [];
        this.secondbannerproducts = [];
        for( let i in productsSale){
            let product = productsSale[i]; 
            if(product.categoria?.includes("basket")){
                this.firstbannerproducts.push(product);
            }
            else{
                this.secondbannerproducts.push(product);
            }
        }
    }
      
    
    
      getData(): Promise<any> {
        return this.getproducts();
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
