import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-food-of-the-day',
  templateUrl: './food-of-the-day.component.html',
  styleUrls: ['./food-of-the-day.component.css']
})
export class FoodOfTheDayComponent {

  @Input() remainingCalories?: number;
  @Input() nameOfMeal?: string;
  @Input() componentNumber?: string;
  @Input() chosenCalories: number = 0;
  slider: boolean = false;
  completed: boolean = false;
  @Input() disableButton: boolean = false;
  @Output() onSaveEvent = new EventEmitter<any>();

  displaySlider() {
    this.slider = true;
  }

  saveSlideData() {
    this.completed = true;
    this.slider = false;
    this.onSaveEvent.emit(this.chosenCalories);
  }

}
