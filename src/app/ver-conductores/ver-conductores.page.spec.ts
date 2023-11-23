import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerConductoresPage } from './ver-conductores.page';

describe('VerConductoresPage', () => {
  let component: VerConductoresPage;
  let fixture: ComponentFixture<VerConductoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerConductoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
