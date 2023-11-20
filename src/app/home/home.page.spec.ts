import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomePage],
        imports: [IonicModule.forRoot(), FormsModule],
      }).compileComponents();

      fixture = TestBed.createComponent(HomePage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title', () => {
    const titleElement: HTMLElement = fixture.nativeElement.querySelector('ion-title');
    expect(titleElement.textContent).toContain('Bienvenido a la Página de Inicio');
  });

  it('should update user model on input change', () => {
    const userInputElement: HTMLInputElement = fixture.nativeElement.querySelector('ion-input[name="user"]');
    userInputElement.value = 'usuario@example.com';
    userInputElement.dispatchEvent(new Event('input'));

    expect(component.user.Gmail).toEqual('usuario@example.com');
  });

  it('should call login method when login button is clicked', () => {
    spyOn(component, 'login');

    const loginButtonElement: HTMLButtonElement = fixture.nativeElement.querySelector('ion-button[type="button"]');
    loginButtonElement.click();

    expect(component.login).toHaveBeenCalled();
  });
});