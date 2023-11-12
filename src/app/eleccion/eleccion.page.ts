import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-eleccion',
  templateUrl: './eleccion.page.html',
  styleUrls: ['./eleccion.page.scss'],
})
export class EleccionPage implements OnInit {

  constructor(public navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {
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
