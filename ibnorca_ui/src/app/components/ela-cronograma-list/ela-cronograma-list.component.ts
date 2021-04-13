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
  
  currentCrongrama: Elacronogama;
  mode = "LIST";

  constructor() {}

  ngOnInit() {}
  addCronograma() {
    this.currentCrongrama = new Elacronogama();
    this.mode = "EDIT";
  }

  editarCronograma(index) {
    this.currentCrongrama = this.listCronograma[index];
    this.mode = "EDIT";
  }
}
