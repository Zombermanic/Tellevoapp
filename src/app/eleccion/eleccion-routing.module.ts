import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EleccionPage } from './eleccion.page';

const routes: Routes = [
  {
    path: '',
    component: EleccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EleccionPageRoutingModule {}
