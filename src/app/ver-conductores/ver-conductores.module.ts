import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerConductoresPageRoutingModule } from './ver-conductores-routing.module';

import { VerConductoresPage } from './ver-conductores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerConductoresPageRoutingModule
  ],
  declarations: [VerConductoresPage]
})
export class VerConductoresPageModule {}
