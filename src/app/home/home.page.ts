import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username: string = '';
  password: string = '';

  constructor(public alertController: AlertController) { }

  ionViewDidEnter() {
    // Limpiar los campos cuando la página se muestra
    this.username = '';
    this.password = '';
  }

  login() {
    if (this.username && this.password) {
      this.showAlert('Inicio de sesión exitoso', `Bienvenido, ${this.username}!`);
    } else {
      this.showAlert('Error de inicio de sesión', 'Usuario o contraseña incorrectos');
    }
  }

  async showAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  
}
