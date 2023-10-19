import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {

  constructor(public navCtrl: NavController) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const ingresado = localStorage.getItem('ingresado');
    const recordarUsuario = localStorage.getItem('recordarUsuario') === 'true';

    if (ingresado || (recordarUsuario && ingresado !== 'false')) {
      this.navCtrl.navigateRoot('inicio');
      return false;
    } else {
      return true;
    }
  }
}