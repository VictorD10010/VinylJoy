import { Component } from '@angular/core';
import { Disco } from './shared/model/disco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vinyljoy';
  /**disco: Disco;
  estante: Array<Disco>;
  discoExclude: Disco;*/

  constructor(){
    /*this.disco = new Disco();
    this.estante = new Array<Disco>();
    this.discoExclude = new Disco();*/
  }

  /*addDisco(): void {
    this.estante.push(this.disco);
    this.disco = new Disco();
  }
  rmDisco(): void {
    let discRemove = this.estante.findIndex(disco => disco.barCode === this.discoExclude.barCode);
    this.estante.splice(discRemove, 1);
  }*/


}
