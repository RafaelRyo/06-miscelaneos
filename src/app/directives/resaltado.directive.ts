import { Directive, Input , ElementRef, HostListener } from '@angular/core';
//El HostListener le decimos a la aplicacion que queremos estar escuchando ya se el paso del maus
// el el ElementRef es para poner el color a la palabra
@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el: ElementRef) {
    console.log("Directiva llamada");
    //Aqui se usa el ElementRef
    //estamos cambiando el estilo dejando todo el fondo en amarillo
    //el.nativeElement.style.backgroundColor = "yellow";
   }

   @Input('appResaltado') nuevoColor:string;
   //mouseenter significa que cuando el mouse pase por encima haga cambiar el color ha amarillo
   @HostListener('mouseenter') mouseEntro(){

     //vamos ha llamar la propiedad privada
     this.resaltar(this.nuevoColor || 'yellow');
     //this.el.nativeElement.style.backgroundColor = "yellow";
   }
   //ES cuando queremos recibir unparametro que viene de afuera


   //Que es lo que quiero estar escuchando
   //mouseleave significa que cuando ya no este encima vuelva al color que estaba
   @HostListener('mouseleave') mouseSalio(){

   this.resaltar(null); 
     //this.el.nativeElement.style.backgroundColor = null;
   }

   //Propieda privada solo va hacer usada por esta Directiva

   private resaltar(color:string ){
     this.el.nativeElement.style.backgroundColor = color;

   }



   }
