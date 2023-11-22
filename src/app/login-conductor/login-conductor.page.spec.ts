import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginConductorPage } from './login-conductor.page';

describe('LoginConductorPage', () => {
  let component: LoginConductorPage;
  let fixture: ComponentFixture<LoginConductorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
