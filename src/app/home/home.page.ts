import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AUTService } from 'src/app/aut.service';
import { AlumnosService } from '../service/autenticacion.service';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  user = {
    user: "",         
    password: ""     
  };

  constructor(private router: Router, private authService: AUTService, private api: AlumnosService) {}

  login() {
    this.api.getAlumnos().subscribe(
      (alumnos) => {
        if (alumnos && alumnos.length > 0) {
          const usuario = this.user.user.toLowerCase();
          const password = this.user.password.toLowerCase();

          const alumno = alumnos.find((alumno) => alumno.user.toLowerCase() === usuario || alumno.user.toLowerCase() === usuario);

          if (alumno && alumno.password.toLowerCase() === password) {
            console.log('Autenticación exitosa');

            let navigationExtras: NavigationExtras = {
              state: {
                user: this.user,
                alumno: alumno
              }
            };

            this.router.navigate(['/inicio'], navigationExtras);
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
}
