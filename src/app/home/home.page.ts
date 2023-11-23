import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AUTService } from 'src/app/aut.service';
import { AlumnosService } from '../service/autenticacion.service';
import { Storage } from '@ionic/storage';
import { GuardGuard } from '../guard/guard.guard';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  user = {
    Gmail: "",         
    password: ""     
  };
  rememberMe!: boolean;

  constructor(private router: Router, private authService: AUTService, public api: AlumnosService, private storage: Storage, private auth: GuardGuard) {
    this.initStorage();
  }

  async initStorage(){
    this.storage = await this.storage.create();
    console.log('Storage esta listo');
  }
  login() {
    this.api.getAlumnos().subscribe(
      (alumnos) => {
        if (alumnos && alumnos.length > 0) {
          const usuario = this.user.Gmail.toLowerCase();
          const password = this.user.password.toLowerCase();

          const alumno = alumnos.find((alumno) => alumno.Gmail.toLowerCase() === usuario || alumno.user.toLowerCase() === usuario);

          if (alumno && alumno.password.toLowerCase() === password) {
            console.log('Autenticación exitosa');
            this.auth.setAuthenticationStatus(true);

            const correoUsuario = this.user.Gmail;

            this.redirigirSegunCorreo(correoUsuario);

            let navigationExtras: NavigationExtras = {
              state: {
                user: this.user,
                alumno: alumno
              }
            };
            if (this.rememberMe) {
              localStorage.setItem('credentials', JSON.stringify({ Gmail: this.user.Gmail, Contrasena: this.user.password }));
              console.log('Credenciales guardadas en localStorage');
            } else {
              // Si no está marcado, elimina las credenciales almacenadas
              localStorage.removeItem('credentials');
              console.log('Credenciales eliminadas de localStorage');
            }

          } else {
            console.log('Autenticación fallida: Credenciales incorrectas');
            this.router.navigate(['/home']);
          }
        } else {
          console.error('La respuesta de la API es un array vacío o nulo');
          this.router.navigate(['/home']);
        }
      },
      (error) => {
        console.error('Error al obtener datos de la API', error);
        if (error.status === 401) {
          console.log('Error de autenticación: Credenciales incorrectas');
          this.router.navigate(['/home']);
        } else {
          console.error('Otro tipo de error:', error);
          this.router.navigate(['/home']);
        }
      }
    );
  }
// Método para redirigir según el correo electrónico
private redirigirSegunCorreo(correo: string) {
  // Obtener la parte del dominio del correo electrónico
  const dominio = correo.split('@')[1];

  // Lógica de redirección basada en la parte del dominio
  if (dominio === 'pduoc.cl') {
    // Redirigir a una página específica para correos con dominio "duoc.cl"
    this.router.navigate(['/inicio']);
}
}
}