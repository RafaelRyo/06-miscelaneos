import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {
  //este es el parametro que enviamos
  alerta:string = "warning";

  constructor() { }

  ngOnInit() {
  }

}
