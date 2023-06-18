import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieCountComponent } from './calorie-count.component';

describe('CalorieCountComponent', () => {
  let component: CalorieCountComponent;
  let fixture: ComponentFixture<CalorieCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalorieCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalorieCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
