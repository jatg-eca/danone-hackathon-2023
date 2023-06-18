import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDiaryComponent } from './user-diary.component';

describe('UserDiaryComponent', () => {
  let component: UserDiaryComponent;
  let fixture: ComponentFixture<UserDiaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDiaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
