import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationUserComponent } from './registeration-user.component';

describe('RegisterationUserComponent', () => {
  let component: RegisterationUserComponent;
  let fixture: ComponentFixture<RegisterationUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterationUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
