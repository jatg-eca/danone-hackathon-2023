import { Component } from '@angular/core';

@Component({
  selector: 'app-user-diary',
  templateUrl: './user-diary.component.html',
  styleUrls: ['./user-diary.component.css']
})
export class UserDiaryComponent {

  maxCalories?: number;
  caloriesConsumed: number = 0;
  burnedCalories?: number;
  nameOfMeals: string[] = ["Breakfast", "Lunch", "Dinner", "Snacks"];
  EXPECTED_MEALS: number = this.nameOfMeals.length;
  mealsCompleted: number = 0;
  mealsToStore: any = [];
  step: number = 1;

  changeRemainingCaloriesForMeal(caloriesChangedInMeal: number, mealName: string) {
    this.caloriesConsumed = this.caloriesConsumed + caloriesChangedInMeal;
    this.maxCalories = this.maxCalories! - caloriesChangedInMeal;
    this.mealsCompleted++;
    const mealStored = {mealName, caloriesChangedInMeal};
    this.mealsToStore.push(mealStored);
  }

  storeCaloricPlanLocally() {
    localStorage.clear();
    const caloricPlan = {
      maxCalories : this.maxCalories,
      caloriesConsumed : this.caloriesConsumed,
      burnedCalories : this.burnedCalories
    }
    const caloricPlanStringified : string = JSON.stringify(caloricPlan);
    const mealsPlan : string = JSON.stringify(this.mealsToStore);
    localStorage.setItem("caloricPlan", caloricPlanStringified);
    localStorage.setItem("mealPlan",mealsPlan);
  }

}
