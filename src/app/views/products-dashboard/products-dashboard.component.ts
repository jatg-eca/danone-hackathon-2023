import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.css']
})
export class ProductsDashboardComponent {

  searchTerm: string = "";

  products: Product[] = [
    {productImage: "https://via.placeholder.com/500x300", productName: "ECO Natural", numberInPresentation: 4, kilocalories: 62},
    {productImage: "https://via.placeholder.com/500x300", productName: "Azucarado", numberInPresentation: 16, kilocalories: 72},
    {productImage: "https://via.placeholder.com/500x300", productName: "Coco", numberInPresentation: 4, kilocalories: 72},
    {productImage: "https://via.placeholder.com/500x300", productName: "Griego Natural", kilocalories: 96},
  ]

  isPartOfSearch(text: string) {
    if(this.searchTerm.trim() === "") return true;
    text = text.toLowerCase();
    this.searchTerm = this.searchTerm.trim().toLowerCase();
    if(text.includes(this.searchTerm)) return true;
    return false;
  }
  
}
