import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  hide = true;

  user = {
    username: "",
    password: ""
  }

  constructor(private router: Router) {}

  irInicio(){ 
    let navigationExtras : NavigationExtras = {
      state: {
        user: this.user
      }
    }
    this.router.navigate(['/inicio'], navigationExtras)
  }
  
}
