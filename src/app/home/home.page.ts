import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  formularioLogin: FormGroup;
  recordarUsuario: boolean = false; // Variable para controlar la opción de "Recuérdame"

  constructor(private router: Router,
    public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
    
  }

  async ingresar() {
    var f = this.formularioLogin.value;
    var usuarioString = localStorage.getItem('usuario');
  
    if (usuarioString) {
      // Si el valor de usuarioString no es nulo, intenta analizarlo como objeto JSON
      var usuario = JSON.parse(usuarioString);
  
      if (usuario.nombre == f.nombre && usuario.password == f.password) {
        console.log('Ingresado');
        localStorage.setItem('ingresado','true')
        this.navCtrl.navigateRoot('inicio')
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos que ingresaste son incorrectos.',
          buttons: ['Aceptar']
        });
  
        await alert.present();
      }
    } else {
      // Si no hay usuario en localStorage, muestra un mensaje de error
      const alert = await this.alertController.create({
        header: 'No se encontró el usuario',
        message: 'No hay un usuario almacenado en el dispositivo.',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }

  irInicio() {
    let navigationExtras: NavigationExtras = {
      state: {
        // Puedes pasar cualquier dato que desees al componente "inicio" aquí
      }
    }
    this.router.navigate(['/inicio'], navigationExtras);
  }
}
