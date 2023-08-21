import { Component, Input } from '@angular/core';
import { Product } from 'src/domain/product';
@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss']
})
export class PreferitiComponent {
  isFavorite: boolean = false;
  @Input() product!: Product;

  toggleFavorite(  product:Product) {
    this.isFavorite = !this.isFavorite;
  }
}
