import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.page.html',
  styleUrls: ['./animation.page.scss'],
})
export class AnimationPage implements OnInit {

  constructor(private router: Router) { }

  navigateToAnimacion() {
    this.router.navigate(['animacion']); // Navega a la página de animación
  }

  ngOnInit() {
  }

}



 
