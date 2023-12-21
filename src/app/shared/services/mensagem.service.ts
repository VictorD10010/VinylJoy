import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class MensagemService {
  constructor(private snackBar: MatSnackBar) {}

  mostrarMensagem(message: string, isError: boolean) {
    this.snackBar.open(message, 'Fechar', {
      duration: 3000,
      panelClass: isError ? 'error-snackbar' : 'success-snackbar'
    });
  }
}
