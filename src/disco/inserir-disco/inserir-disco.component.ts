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
      if(this.disco.titulo && this.disco.banda && this.disco.genero && this.disco.gravadora && this.disco.barCode){
        this.estante.push(this.disco);
        this.disco = new Disco();
      }
      else{
        console.error ('Preenchimento obrigatorio');
      }

    }
    rmDisco(): void {
      let discRemove = this.estante.findIndex(disco => disco.barCode === this.discoExclude.barCode);
      this.estante.splice(discRemove, 1);
    }
}
export const estante=[
  
]
