

import { Component } from '@angular/core';
import { Disco } from 'src/app/shared/model/disco';
import { MensagemService } from 'src/app/shared/services/mensagem.service';

@Component({
  selector: 'app-inserir-disco',
  templateUrl: './inserir-disco.component.html',
  styleUrls: ['./inserir-disco.component.css']
})
export class InserirDiscoComponent {
  title = 'Vinyljoy';
  disco: Disco;
  estante: Array<Disco>;
  discoExclude: Disco;

  constructor(private mensagemService: MensagemService) {
    this.disco = new Disco();
    this.estante = new Array<Disco>();
    this.discoExclude = new Disco();
  }

  addDisco(): void {
    if (
      this.disco.titulo &&
      this.disco.banda &&
      this.disco.genero &&
      this.disco.gravadora &&
      this.disco.barCode
    ) {
      this.estante.push(this.disco);
      this.disco = new Disco();
      this.mensagemService.mostrarMensagem('Disco adicionado com sucesso', true);
    } else {
      this.mensagemService.mostrarMensagem('Preenchimento obrigatório', false);
    }
  }

  rmDisco(barCode?: string): void {
    let discRemove = this.estante.findIndex(
      (disco) => disco.barCode === barCode
    );
    if (discRemove >= 0) {
      this.estante.splice(discRemove, 1);
      this.mensagemService.mostrarMensagem('Disco removido com sucesso', true);
    }
  }
}

