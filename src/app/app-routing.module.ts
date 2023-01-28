import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '',  loadChildren:() => import('./pages/home/home.module').then(m => m.HomeModule)},
  {path: 'conversor',  loadChildren:() => import('./pages/conversor/conversor.module').then(m => m.ConversorModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
