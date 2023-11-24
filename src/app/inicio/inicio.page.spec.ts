import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { InicioPage } from './inicio.page';
import { NavController } from '@ionic/angular';

describe('InicioPage', () => {
  let component: InicioPage;
  let fixture: ComponentFixture<InicioPage>;
  let mockNavController: any;

  beforeEach(
    waitForAsync(() => {
      mockNavController = jasmine.createSpyObj('NavController', ['navigateRoot']);

      TestBed.configureTestingModule({
        declarations: [InicioPage],
        providers: [
          { provide: NavController, useValue: mockNavController }
        ]
      }).compileComponents();

      fixture = TestBed.createComponent(InicioPage);
      component = fixture.componentInstance;
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close session and redirect to home', async () => {
    spyOn(localStorage, 'setItem');
    spyOn(localStorage, 'removeItem');

    await component.cerrarSesion();

    expect(localStorage.setItem).toHaveBeenCalledWith('recordarUsuario', 'false');
    expect(localStorage.removeItem).toHaveBeenCalledWith('ingresado');
    expect(mockNavController.navigateRoot).toHaveBeenCalledWith('home');
  });
});
