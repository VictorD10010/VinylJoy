import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InserirDiscoComponent } from 'src/disco/inserir-disco/inserir-disco.component';
import { ListagemDiscoComponent } from 'src/disco/listagem-disco/listagem-disco.component';

const routes: Routes = [
  {
    path: "cadastro-disco",
    component: InserirDiscoComponent
  },
  {
    path: "listagem-discos",
    component: ListagemDiscoComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
