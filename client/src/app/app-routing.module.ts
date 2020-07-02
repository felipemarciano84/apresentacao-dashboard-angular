import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'clientes', loadChildren: ()=> import('./pages/clientes/cliente.module').then(m => m.ClienteModule)}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
