import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html'
})
export class ClasesComponent implements OnInit {
  propiedades: object ={
    danger : false
  }
  alerta:string = "alert-danger"
  loading:boolean = false;


  constructor() { }

  ngOnInit() {
  }
  ejecutar(){
    this.loading = true;

    setTimeout( () => this.loading = false , 3000)
    
  }

}
