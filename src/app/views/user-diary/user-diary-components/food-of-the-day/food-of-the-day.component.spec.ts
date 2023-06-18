import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOfTheDayComponent } from './food-of-the-day.component';

describe('FoodOfTheDayComponent', () => {
  let component: FoodOfTheDayComponent;
  let fixture: ComponentFixture<FoodOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOfTheDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
