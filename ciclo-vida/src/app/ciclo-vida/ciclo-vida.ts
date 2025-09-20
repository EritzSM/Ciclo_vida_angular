import { 
  Component, 
  OnInit, // Se ejecuta una vez, después de inicializar las propiedades del componente.
  OnChanges, //Se ejecuta cuando cambian los valores de las propiedades de entrada (@Input)
  DoCheck, 
  AfterContentInit, //Se llama una vez, después de insertar el contenido externo en el componente 
  AfterContentChecked, //Se ejecuta después de cada verificación del contenido proyectado.
  AfterViewInit, //Se llama una vez, después de inicializar las vistas del componente y sus hijos.
  AfterViewChecked, //Se ejecuta después de cada verificación de las vistas del componente y sus hijos.
  OnDestroy, //Se ejecuta justo antes de que el componente sea destruido. Es útil para limpiar recursos, como suscripciones o temporizadores.
  Input, 
  SimpleChanges 
} from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.html',
  styleUrls: ['./ciclo-vida.css']
})
export class CicloVidaComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
  AfterViewChecked, 
  OnDestroy {

  @Input() mensaje: string = 'Hola ciclo de vida!';

  log(hook: string) {
    console.log(`Se ejecutó: ${hook}`);
  }

  constructor() {
    this.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }
}
