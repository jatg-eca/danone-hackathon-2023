import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calorie-count',
  templateUrl: './calorie-count.component.html',
  styleUrls: ['./calorie-count.component.css']
})
export class CalorieCountComponent {

  @Input() caloriesNumber?: number;
  @Input() caloriesName?: string;


}
