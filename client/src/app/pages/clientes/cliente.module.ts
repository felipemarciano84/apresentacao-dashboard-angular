import { ClienteListarComponent } from './listar/cliente-listar.component';
import { Routes, RouterModule } from '@angular/router';
import { ClienteSalvarComponent } from './salvar/cliente-salvar.component';
import { NgModule } from '@angular/core';
import { ClienteService } from './shared/cliente.service';

const routes: Routes = [
  {path: '', component: ClienteListarComponent, pathMatch: 'full'},
  {path: 'adicionar', component: ClienteSalvarComponent},
  {path: ':id/editar', component: ClienteSalvarComponent}
];

@NgModule({
  declarations: [
    ClienteListarComponent,
    ClienteSalvarComponent
  ],
  imports:[
    RouterModule.forChild(routes)
  ],
  exports:[
    ClienteListarComponent,
    ClienteSalvarComponent
  ],
  providers: [ClienteService]
})
export class ClienteModule{}
