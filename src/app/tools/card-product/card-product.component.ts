import { Component, Input } from '@angular/core';
import { Product } from 'src/domain/product';
import { ProductService } from 'src/service/productservice';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input() product!: Product;

  
  responsiveOptions: any[] | undefined;
  isFavorite: boolean = false;

  toggleFavorite(  product:Product) {
    this.isFavorite = !this.isFavorite;
  }

  constructor(private productService: ProductService) {}
  ngOnInit() {
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
