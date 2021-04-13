import { Component, Input, OnInit } from "@angular/core";
import { Personal } from "src/app/interfaces/apertura_auditoria/personal";
import { Elacronogama } from "src/app/interfaces/elaboracion_auditoria/PlanAuditoriaDTO";

@Component({
  selector: "app-ela-cronograma-list",
  templateUrl: "./ela-cronograma-list.component.html",
  styleUrls: ["./ela-cronograma-list.component.scss"],
})
export class ElaCronogramaListComponent implements OnInit {
  @Input() listCronograma: Elacronogama[];
  @Input() listaParticipantes: Personal[];
  @Input() llaves: {
    idDireccionPaproducto: null;
    idDireccionPasistema: null;
  };
  currentCrongrama: Elacronogama;
  currentCrongramaIndex = -1;
  mode = "LIST";

  constructor() {}

  ngOnInit() {
    if (!this.listCronograma) {
      this.listCronograma = new Array<Elacronogama>();
    }
  }
  addCronograma() {
    this.currentCrongrama = new Elacronogama();
    this.mode = "EDIT";
  }

  editarCronograma(index) {
    this.currentCrongrama = this.listCronograma[index];
    this.currentCrongramaIndex = index;
    this.mode = "EDIT";
  }

  eliminarCronograma(index) {
    this.listCronograma.splice(index, 1);
  }

  guardarCronograma(event) {
    console.log("*** se guarda en lista", event);
    event.idDireccionPaproducto = this.llaves.idDireccionPaproducto;
    event.idDireccionPasistema = this.llaves.idDireccionPasistema;
    if ((this.mode = "EDIT")) {
      this.listCronograma[this.currentCrongramaIndex] = event;
    } else {
      this.listCronograma.push(event);
    }
    this.mode = "LIST";
  }

  cancelarCronograma() {
    this.mode = "LIST";
  }
}
