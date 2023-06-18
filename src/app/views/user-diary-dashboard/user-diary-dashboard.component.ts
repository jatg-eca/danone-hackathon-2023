import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ApiService } from 'src/app/services/api.service';



@Component({
  selector: 'app-user-diary-dashboard',
  templateUrl: './user-diary-dashboard.component.html',
  styleUrls: ['./user-diary-dashboard.component.css']
})
export class UserDiaryDashboardComponent {
  isDiarySet: boolean = false;
  caloriesConsumed?: number;
  maxCalories?: number;
  burnedCalories?: number;

  products: Product[] = [ ]
  meals?: any[];

  maxKcalLimitBanner: string = "Your maximum kcal limit";
  productsOfInterestBanner: string = "Your products of interest in terms of ecological footprint";

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    let caloricPlan = localStorage.getItem("caloricPlan");
    let mealPlan = localStorage.getItem("mealPlan");
    if(caloricPlan) this.getCaloricPlanValues(caloricPlan);
    if(mealPlan) this.getMealPlanValues(mealPlan);
    this.checkIfDiaryIsSet();

    this.apiService
        .getAllProducts()
        .subscribe( ({data, error}: any) => {
          let { items } = data.productsCollection;
          this.showFourLastProducts(items);
        })
  }

  getCaloricPlanValues(caloricPlan: string) {
    const caloricPlanObject = JSON.parse(caloricPlan);
    this.maxCalories = caloricPlanObject.maxCalories;
    this.caloriesConsumed = caloricPlanObject.caloriesConsumed;
    this.burnedCalories = caloricPlanObject.burnedCalories;
  }

  getMealPlanValues(mealPlan: string) {
    const mealPlanObject = JSON.parse(mealPlan);
    this.meals = [...mealPlanObject];
  }

  checkIfDiaryIsSet() {
    (this.areAllValuesSet()) ? this.isDiarySet = true : this.isDiarySet = false;
  }

  areAllValuesSet() : boolean {
    return this.maxCalories! >= 0 && !!this.caloriesConsumed && !!this.burnedCalories;
  }

  showFourLastProducts(items: any[]) {
    let copyOfItems: Product[] = [...items];
    copyOfItems = copyOfItems.slice(-4);
    this.products = [...copyOfItems];
  }

  changeRemainingCalories(event: any) {}

}
