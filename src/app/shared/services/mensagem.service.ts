import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  /**mostrarMensagem(arg0: string, arg1: boolean) {
    throw new Error('Metodo não implementado.');
  }*/
  constructor(private snackBar: MatSnackBar) {}

  mostrarMensagem(message: string, isError: boolean) {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000, // Adjust the duration as needed
      panelClass: isError ? 'error-snackbar' : 'success-snackbar'
    });
  }
}
