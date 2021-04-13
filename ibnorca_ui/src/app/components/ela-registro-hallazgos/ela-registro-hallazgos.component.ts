import { Component, Input, OnInit } from '@angular/core';
import { Elahallazgo } from 'src/app/interfaces/elaboracion_auditoria/PlanAuditoriaDTO';

@Component({
  selector: 'app-ela-registro-hallazgos',
  templateUrl: './ela-registro-hallazgos.component.html',
  styleUrls: ['./ela-registro-hallazgos.component.scss'],
})
export class ElaRegistroHallazgosComponent implements OnInit {
  @Input() listaHallazgos: Elahallazgo[];
  mode = "LIST";
  constructor() { }

  ngOnInit() {
    if(!this.listaHallazgos){
      this.listaHallazgos = new Array<Elahallazgo>();
    }
  }
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
