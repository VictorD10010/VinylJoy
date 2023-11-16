import { Component } from '@angular/core';
import { Disco } from 'src/app/shared/model/disco';

@Component({
  selector: 'app-inserir-disco',
  templateUrl: './inserir-disco.component.html',
  styleUrls: ['./inserir-disco.component.css']
})
export class InserirDiscoComponent {
    title= 'Vinyljoy';
    disco: Disco;
    estante: Array<Disco>;
    discoExclude: Disco;

    constructor(){
      this.disco = new Disco();
      this.estante = new Array<Disco>();
      this.discoExclude = new Disco();
    }
  
    addDisco(): void {
      this.estante.push(this.disco);
      this.disco = new Disco();
    }
    rmDisco(): void {
      let discRemove = this.estante.findIndex(disco => disco.barCode === this.discoExclude.barCode);
      this.estante.splice(discRemove, 1);
    }

}
