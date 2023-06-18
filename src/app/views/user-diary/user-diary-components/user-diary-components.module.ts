import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalorieCountComponent } from './calorie-count/calorie-count.component';
import { FoodOfTheDayComponent } from './food-of-the-day/food-of-the-day.component';
import { FrameInfoComponent } from './frame-info/frame-info.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CalorieCountComponent,
    FoodOfTheDayComponent,
    FrameInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CalorieCountComponent,
    FoodOfTheDayComponent,
    FrameInfoComponent
  ]
})
export class UserDiaryComponentsModule { }
