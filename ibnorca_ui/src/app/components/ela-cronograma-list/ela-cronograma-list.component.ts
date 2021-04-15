import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
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
  @Output() guardarCronogramaEmitter = new EventEmitter<any>();
  @Input() llaves: {
    idDireccionPaproducto: null;
    idDireccionPasistema: null;
  };
  currentCrongrama: Elacronogama;
  currentCrongramaIndex = -1;
  mode = "LIST";
  operation = "UPDATE";

  constructor() {}

  ngOnInit() {
    if (!this.listCronograma) {
      this.listCronograma = new Array<Elacronogama>();
    }
  }
  addCronograma() {
    this.currentCrongrama = new Elacronogama();
    this.mode = "EDIT";
    this.operation = "ADD";
  }

  editarCronograma(index) {
    this.currentCrongrama = this.listCronograma[index];
    this.currentCrongramaIndex = index;
    this.mode = "EDIT";
    this.operation = "UPDATE";
  }

  eliminarCronograma(index) {
    this.listCronograma.splice(index, 1);
    if (this.guardarCronogramaEmitter) {
      this.guardarCronogramaEmitter.emit(
        this.listCronograma.filter(
          (x) =>
            x.idDireccionPaproducto === this.llaves.idDireccionPaproducto &&
            x.idDireccionPasistema === this.llaves.idDireccionPasistema
        )
      );
    }
  }

  guardarCronograma(event) {
    console.log("*** se guarda en lista", event);
    event.idDireccionPaproducto = this.llaves.idDireccionPaproducto;
    event.idDireccionPasistema = this.llaves.idDireccionPasistema;
    if (this.operation === "UPDATE") {
      this.listCronograma[this.currentCrongramaIndex] = event;
    } else {
      this.listCronograma.push(event);
    }
    if (this.guardarCronogramaEmitter) {
      this.guardarCronogramaEmitter.emit(
        this.listCronograma.filter(
          (x) =>
            x.idDireccionPaproducto === this.llaves.idDireccionPaproducto &&
            x.idDireccionPasistema === this.llaves.idDireccionPasistema
        )
      );
    }
    console.log("*** listCronograma", this.listCronograma);
    this.mode = "LIST";
  }
  filtrarCronogramaPorLLaves() {
    return this.listCronograma.filter(
      (x) =>
        x.idDireccionPaproducto === this.llaves.idDireccionPaproducto &&
        x.idDireccionPasistema === this.llaves.idDireccionPasistema
    );
  }

  cancelarCronograma() {
    this.mode = "LIST";
  }
}
