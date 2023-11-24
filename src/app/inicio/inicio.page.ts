import { OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { IonModal } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Animation } from '@ionic/angular';
import { IonAvatar } from '@ionic/angular';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage{

correoUsuario = localStorage.getItem('credentials') || '';
nombrePasajero = localStorage.getItem('nombre') || '';

@ViewChild('modal', { static: true }) modal!: IonModal;
state: any;
user: any;

@ViewChild('loginIcon', { read: ElementRef }) loginIcon!: ElementRef;
constructor(
  private activeroute: ActivatedRoute,
  private router: Router,
  private animationCtrl: AnimationController,
  modalController: ModalController,
  public navCtrl: NavController,
) {
  this.activeroute.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation()?.extras.state) {
      this.user = this.router.getCurrentNavigation()?.extras.state?.['user'];

    }
  });
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