import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import {Disco} from '../model/disco';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import {map} from 'rxjs/operators';



@Injectable({
 providedIn: 'root'
})
export class DiscoFirestoreService {


 colecaoDiscos: AngularFirestoreCollection<Disco>;
 NOME_COLECAO = 'discos';


 constructor(private afs: AngularFirestore) {
   this.colecaoDiscos = afs.collection(this.NOME_COLECAO);
 }


 listar(): Observable<Disco[]> {
   // usando options para idField para mapear o id gerado pelo firestore para o campo id de usuário
   return this.colecaoDiscos.valueChanges({idField: 'id'});
 }


 inserir(usuario: Disco): Observable<object> {
   // removendo id pois ele está undefined, já que um novo usuário
   delete usuario.barCode;
   // Object.assign({}, usuario) é usado para passar um objeto json puro. Não se aceita passar um objeto customizado
   // o from transforma uma promise num Observable, para mantermos a assinatura similar ao do outro service
   return from(this.colecaoDiscos.add(Object.assign({}, usuario)));
 }


 apagar(id: string): Observable<void> {
   return from(this.colecaoDiscos.doc(id).delete());
 }
}
