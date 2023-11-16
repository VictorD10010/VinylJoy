import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirDiscoComponent } from 'src/disco/inserir-disco/inserir-disco.component';
import { ListagemDiscoComponent } from './listagem-disco/listagem-disco.component';


@NgModule({
  declarations: [ InserirDiscoComponent, ListagemDiscoComponent],
  imports: [
    CommonModule
  ]
})
export class DiscoModule { }
