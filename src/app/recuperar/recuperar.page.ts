import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {

  formularioContrasena: FormGroup;

  constructor(public fb: FormBuilder, 
              public alertController: AlertController,
              public navCtrl: NavController) {
    this.formularioContrasena = this.fb.group({
      'nuevaContrasena': new FormControl("", Validators.required),
      'username': new FormControl("", Validators.required),
    });
  }

  async cambiarContrasena() {
    // Obtén los valores del formulario
    const { nuevaContrasena, username } = this.formularioContrasena.value;

    // Verifica si la nueva contraseña no está vacía
    if (!nuevaContrasena) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'La nueva contraseña no puede estar vacía.',
        buttons: ['Aceptar']
      });
      await alert.present();
      return;
    }

    // Obtén el usuario almacenado en Local Storage
    const usuarioString = localStorage.getItem('usuario');

    if (usuarioString) {
      const usuario = JSON.parse(usuarioString);

      if (usuario.nombre === username) {
        // Actualiza la contraseña del usuario en Local Storage
        usuario.password = nuevaContrasena;
        localStorage.setItem('usuario', JSON.stringify(usuario));

        // Muestra un mensaje de éxito al usuario
        // Muestra un mensaje de éxito al usuario
        const successAlert = await this.alertController.create({
          header: 'Contraseña cambiada',
          message: 'La contraseña ha sido cambiada con éxito.',
          buttons: ['Aceptar']
        });
        await successAlert.present();

        // Navega al inicio de sesión
        this.navCtrl.navigateBack('/login');
        await successAlert.present();
      } else {
        // Muestra un mensaje de error si el nombre de usuario no coincide
        const errorAlert = await this.alertController.create({
          header: 'Nombre de usuario incorrecto',
          message: 'El nombre de usuario proporcionado no coincide con el usuario almacenado.',
          buttons: ['Aceptar']
        });
        await errorAlert.present();
      }
    } else {
      // Muestra un mensaje de error si el usuario no existe en Local Storage
      const userNotFoundAlert = await this.alertController.create({
        header: 'Usuario no encontrado',
        message: 'No se encontró un usuario registrado.',
        buttons: ['Aceptar']
      });
      await userNotFoundAlert.present();
    }
  }
}
