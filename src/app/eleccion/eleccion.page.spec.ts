import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EleccionPage } from './eleccion.page';

describe('EleccionPage', () => {
  let component: EleccionPage;
  let fixture: ComponentFixture<EleccionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EleccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
