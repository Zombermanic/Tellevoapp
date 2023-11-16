import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomePageRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HomePageRoutingModule,
    MatSlideToggleModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
