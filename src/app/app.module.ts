import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { from } from 'rxjs';
import { InserirDiscoComponent } from 'src/disco/inserir-disco/inserir-disco.component'
import { MenuComponent } from 'src/app/layout/menu/menu.component';
import { ListagemDiscoComponent } from 'src/disco/listagem-disco/listagem-disco.component';
import { LayoutModule } from './layout/layout.module';
import { DiscoModule } from 'src/disco/disco.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    DiscoModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
