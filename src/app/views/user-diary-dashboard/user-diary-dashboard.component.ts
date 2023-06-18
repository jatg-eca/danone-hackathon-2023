import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';



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

  products: Product[] = [
    {productImage: "https://via.placeholder.com/500x300", productName: "ECO Natural", numberInPresentation: 4, kilocalories: 62},
    {productImage: "https://via.placeholder.com/500x300", productName: "Azucarado", numberInPresentation: 16, kilocalories: 72},
    {productImage: "https://via.placeholder.com/500x300", productName: "Coco", numberInPresentation: 4, kilocalories: 72},
    {productImage: "https://via.placeholder.com/500x300", productName: "Griego Natural", kilocalories: 96},
  ]
  meals?: any[];

  maxKcalLimitBanner: string = "Your maximum kcal limit";
  productsOfInterestBanner: string = "Your products of interest in terms of ecological footprint";

  ngOnInit(): void {
    let caloricPlan = localStorage.getItem("caloricPlan");
    let mealPlan = localStorage.getItem("mealPlan");
    if(caloricPlan) this.getCaloricPlanValues(caloricPlan);
    if(mealPlan) this.getMealPlanValues(mealPlan);
    this.checkIfDiaryIsSet();
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

  changeRemainingCalories(event: any) {

  }

}
