import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  nombreUsuario: string =''; // Agrega esta línea

  constructor(public navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {
    // Verifica si el usuario ha iniciado sesión (por ejemplo, mediante la verificación de una bandera 'ingresado' en localStorage)
    if (localStorage.getItem('ingresado') === 'true') {
      // Recupera el nombre del usuario
      const usuarioString = localStorage.getItem('usuario');
      if (usuarioString) {
        const usuario = JSON.parse(usuarioString);
        this.nombreUsuario = usuario.nombre;
      }
    }
  }

  async cerrarSesion() {
    // Actualiza la opción "Recuérdame" a false al cerrar sesión
    localStorage.setItem('recordarUsuario', 'false');
    localStorage.removeItem('ingresado');

    // Redirige al usuario a la página de inicio de sesión
    console.log('Cerrando sesión...');
    this.navCtrl.navigateRoot('home');
  }
}
