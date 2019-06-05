import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'sucursales', loadChildren: './componentes/sucursales/sucursales.module#SucursalesPageModule' },
  { path: 'menu', loadChildren: './componentes/menu/menu.module#MenuPageModule' },
  { path: 'ordenar', loadChildren: './componentes/ordenar/ordenar.module#OrdenarPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
