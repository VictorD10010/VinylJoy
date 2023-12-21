import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
//import { firebaseConfig } from 'src/firebase.config';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule,//.initializeApp(firebaseConfig), 
    AngularFirestoreModule, 
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ]
})
export class FirestoreModule { }
