import { Component } from '@angular/core';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida'; // 👈 importar tu componente hijo
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CicloVidaComponent, NgIf],
  templateUrl:'./app.html',
  styleUrls: ['./app.css']
})

export class AppComponent {
  mensaje = 'Mensaje inicial';
  mostrar = true;

  cambiarMensaje() {
    this.mensaje = 'Mensaje cambiado ' + new Date().toLocaleTimeString();
  }
}
