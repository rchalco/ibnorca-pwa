import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Elacontenidoauditorium } from 'src/app/interfaces/elaboracion_auditoria/PlanAuditoriaDTO';

@Component({
  selector: 'app-ela-plan-muestreo',
  templateUrl: './ela-plan-muestreo.component.html',
  styleUrls: ['./ela-plan-muestreo.component.scss'],
})
export class ElaPlanMuestreoComponent implements OnInit {

  @Input() listaContenido: Elacontenidoauditorium[] = [];

  planMuestreo: Elacontenidoauditorium = new Elacontenidoauditorium();
  DocumentacionReferencia: Elacontenidoauditorium = new Elacontenidoauditorium();

  @Output() guardarPlanMuestreo: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
    this.planMuestreo = this.listaContenido.find(x => x.nemotico === "ACTAMUESTREO_PLAN");
    this.DocumentacionReferencia = this.listaContenido.find(x => x.nemotico === "PLAN_CRITERIO");
    console.log(this.listaContenido);
  }

  guardarMuestreo() {

    this.listaContenido.map(obj =>
      this.listaContenido.find(o => o.nemotico === this.planMuestreo.nemotico) || obj);

    this.listaContenido.map(obj =>
      this.listaContenido.find(o => o.nemotico === this.DocumentacionReferencia.nemotico) || obj);

    console.log("ingresa a guardar muestreo");
    if (this.guardarPlanMuestreo) {
      this.guardarPlanMuestreo.emit(this.listaContenido);
    }
  }

}
