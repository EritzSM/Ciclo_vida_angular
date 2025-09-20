# Ciclo_vida_angular

# Ciclo de Vida de un Componente en Angular

Este proyecto muestra en qué orden se ejecutan los **hooks del ciclo de vida de un componente**.
La aplicación incluye un componente principal (`AppComponent`) y un componente hijo (`CicloVidaComponent`) en el cual se implementan todos los métodos de ciclo de vida.

Permite:

* Ver en consola el orden de ejecución de los hooks.
* Interactuar con el componente para activar diferentes momentos del ciclo de vida.
* Destruir y volver a crear el componente con un botón.
* Disparar cambios en las propiedades con `@Input` para observar `ngOnChanges`.

---

## Ciclo de Vida en Angular

Los **momentos del ciclo de vida** implementados en `CicloVidaComponent` son:

1. **constructor** → Se ejecuta cuando se crea la instancia del componente.
2. **ngOnChanges** → Se ejecuta cuando cambia un valor de las propiedades `@Input`.
3. **ngOnInit** → Se ejecuta una sola vez al inicializar el componente.
4. **ngDoCheck** → Detecta cambios personalizados que Angular no detecta automáticamente.
5. **ngAfterContentInit** → Se llama cuando el contenido proyectado (ng-content) se inicializa.
6. **ngAfterContentChecked** → Se llama después de que el contenido proyectado fue verificado.
7. **ngAfterViewInit** → Se ejecuta cuando la vista del componente y sus hijos se inicializan.
8. **ngAfterViewChecked** → Se ejecuta después de que la vista del componente fue verificada.
9. **ngOnDestroy** → Se ejecuta justo antes de destruir el componente (por ejemplo, al usar `*ngIf`).

---

## Cómo probarlo

1. Clonar este repositorio o crear un proyecto Angular nuevo.
2. Ejecutar:

   ```bash
   npm install
   ng serve -o
   ```
3. En la aplicación:

   * Haz clic en **Cambiar Mensaje** → verás `ngOnChanges` y `ngDoCheck`.
   * Haz clic en **Destruir Componente** → verás `ngOnDestroy`.
   * Vuelve a mostrar el componente → se repite el ciclo desde el `constructor`.

