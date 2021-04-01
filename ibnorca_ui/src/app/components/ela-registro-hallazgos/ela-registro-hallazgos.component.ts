import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ela-registro-hallazgos',
  templateUrl: './ela-registro-hallazgos.component.html',
  styleUrls: ['./ela-registro-hallazgos.component.scss'],
})
export class ElaRegistroHallazgosComponent implements OnInit {

  mode = "LIST";
  constructor() { }

  ngOnInit() {}
  editarHallazgo(){
    this.mode = "EDIT";
  }
  guardarHallazgo(){
    this.mode = "LIST";
  }
  cancelarHallazo(){
    this.mode = "LIST";
  }

}
