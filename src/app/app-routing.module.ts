import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guard/guard.guard';


const routes: Routes = [
  {
    path: 'eleccion',
    loadChildren: () => import('./eleccion/eleccion.module').then( m => m.EleccionPageModule) 
  },
  {
    path: '',
    redirectTo: 'eleccion',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule),
    canActivate: [GuardGuard]
  },
  {
    path: 'ver-conductores',
    loadChildren: () => import('./ver-conductores/ver-conductores.module').then( m => m.VerConductoresPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then(m => m.RecuperarPageModule),
  }, 
  {
    path: 'conductor',
    loadChildren: () => import('./conductor/conductor.module').then(m => m.ConductorPageModule),
    canActivate: [GuardGuard]
  },
  
  {
    path: 'login-conductor',
    loadChildren: () => import('./login-conductor/login-conductor.module').then( m => m.LoginConductorPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./error/error.module').then(m => m.ErrorPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
