import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import { GET_PRODUCTS } from "../graphql.operations";


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private apollo: Apollo) { }

  getAllProducts() {
    return this.apollo
        .watchQuery(
          {query: GET_PRODUCTS})
        .valueChanges
  }

}
