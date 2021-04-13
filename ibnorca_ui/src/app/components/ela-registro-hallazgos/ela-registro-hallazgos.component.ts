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
  operacion = "";
  currentHallazgo: Elahallazgo;
  currentIndex = -1;
  constructor() { }

  ngOnInit() {
    if(!this.listaHallazgos){
      this.listaHallazgos = new Array<Elahallazgo>();
    }
  }
  editarHallazgo(i){
    this.mode = "EDIT";
    this.operacion = "UPD";
    console.log("Guardar Hallazgo",this.listaHallazgos[i]);
    this.currentHallazgo = this.listaHallazgos[i];
    this.currentIndex = i;

  }
  guardarHallazgo(event){
    this.mode = "LIST";
    if (this.operacion === "UPD") this.listaHallazgos[this.currentIndex] = event;
    else this.listaHallazgos.push(event);

  }
  cancelarHallazo(){
    this.mode = "LIST";
  }
  adicionarHallazgo() {
    this.mode = "EDIT";
    this.operacion = "ADD";
    this.currentHallazgo = new Elahallazgo();
  }
}
