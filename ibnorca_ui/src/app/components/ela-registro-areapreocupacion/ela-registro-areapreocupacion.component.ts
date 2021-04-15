import { Component, Input, OnInit } from '@angular/core';
import { Elaadp } from 'src/app/interfaces/elaboracion_auditoria/PlanAuditoriaDTO';

@Component({
  selector: 'app-ela-registro-areapreocupacion',
  templateUrl: './ela-registro-areapreocupacion.component.html',
  styleUrls: ['./ela-registro-areapreocupacion.component.scss'],
})
export class ElaRegistroAreapreocupacionComponent implements OnInit {
  @Input() listaAdp: Elaadp[];
  
  mode = "LIST";
  operacion = "";
  currentAdp:  Elaadp;
  currentIndex = -1;
  constructor() {}

  ngOnInit() {
    if (!this.listaAdp) {
      this.listaAdp = new Array<Elaadp>();
    }
  }

  eliminarAdp(i) {
    this.listaAdp.splice(i, 1);
  }
  editarAdp(i) {
    this.mode = "EDIT";
    this.operacion = "UPD";
    console.log("Guardar Adp", this.listaAdp[i]);
    this.currentAdp = this.listaAdp[i];
    this.currentIndex = i;
  }
  guardarAreaDePreocupacion(event) {
    this.mode = "LIST";
    if (this.operacion === "UPD")
      this.listaAdp[this.currentIndex] = event;
    else this.listaAdp.push(event);
  }
  cancelarAreaDePreocupacion() {
    this.mode = "LIST";
  }
  adicionarAdp() {
    this.mode = "EDIT";
    this.operacion = "ADD";
    this.currentAdp = new Elaadp();
  }

}
