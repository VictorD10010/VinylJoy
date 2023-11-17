import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InserirDiscoComponent } from 'src/disco/inserir-disco/inserir-disco.component';
import { ListagemDiscoComponent } from './listagem-disco/listagem-disco.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [ InserirDiscoComponent, ListagemDiscoComponent],
  imports: [
    CommonModule, MatFormFieldModule, MatCardModule,
    BrowserModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    MatMenuModule
  ],
  exports: [ InserirDiscoComponent, ListagemDiscoComponent]
})
export class DiscoModule { }
