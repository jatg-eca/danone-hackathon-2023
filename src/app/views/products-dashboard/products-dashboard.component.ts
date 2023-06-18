import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ApiService } from 'src/app/services/api.service';
import { Apollo } from "apollo-angular";
import { GET_PRODUCTS } from "../../graphql.operations";

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.css']
})
export class ProductsDashboardComponent implements OnInit {

  constructor( private apiService: ApiService, private apollo: Apollo) { }
  ngOnInit() {
    this.apollo.watchQuery({
      query: GET_PRODUCTS,
    }).valueChanges.subscribe(({data, error}: any) => {
      const { items } = data.productsCollection; 
      this.products = [...items]
    })
  }

  searchTerm: string = "";
  products: Product[] = [ ]

  isPartOfSearch(text: string) {
    if(this.searchTerm.trim() === "") return true;
    text = text.toLowerCase();
    this.searchTerm = this.searchTerm.trim().toLowerCase();
    if(text.includes(this.searchTerm)) return true;
    return false;
  }
  
}
