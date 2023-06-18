import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDiaryDashboardComponent } from './user-diary-dashboard.component';

describe('UserDiaryDashboardComponent', () => {
  let component: UserDiaryDashboardComponent;
  let fixture: ComponentFixture<UserDiaryDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDiaryDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDiaryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
