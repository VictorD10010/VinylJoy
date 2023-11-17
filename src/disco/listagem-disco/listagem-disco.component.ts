import { Component } from '@angular/core';
import { Disco } from 'src/app/shared/model/disco';
import { DISCOS } from 'src/app/shared/model/DISCOS';

@Component({
  selector: 'app-listagem-disco',
  templateUrl: './listagem-disco.component.html',
  styleUrls: ['./listagem-disco.component.css']
})
export class ListagemDiscoComponent {
    
    title = "Vinyljoy";
    discos= DISCOS;
   

    



   
}
