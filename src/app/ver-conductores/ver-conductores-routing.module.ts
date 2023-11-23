import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerConductoresPage } from './ver-conductores.page';

const routes: Routes = [
  {
    path: '',
    component: VerConductoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerConductoresPageRoutingModule {}
