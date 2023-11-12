import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EleccionPageRoutingModule } from './eleccion-routing.module';

import { EleccionPage } from './eleccion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EleccionPageRoutingModule
  ],
  declarations: [EleccionPage]
})
export class EleccionPageModule {}
