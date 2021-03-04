import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-verificacion-apertura',
  templateUrl: './lista-verificacion-apertura.component.html',
  styleUrls: ['./lista-verificacion-apertura.component.scss'],
})
export class ListaVerificacionAperturaComponent implements OnInit {

  data = [
    {
      name: 'Presentación del Equipo Auditor y de los representantes del auditado',
      selected: true
    },
    {
      name: 'Confirmar propósito y alcance de la auditoría',
      selected: false
    },
    {
      name: 'Mencionar la(s) norma(s) de referencia de la auditoría para establecer la conformidad del producto',
      selected: true
    },
    {
      name: 'Hacer énfasis en el compromiso de confidencialidad',
      selected: false
    },
    {
      name: 'Definir canales de comunicación',
      selected: false
    },
    {
      name: 'Confirmar la disponibilidad de recursos y medios necesarios',
      selected: false
    },
    {
      name: 'Revisar el plan de auditoría y confirmar los horarios del cronograma, reunión de cierre y reuniones intermedias',
      selected: false
    },
    {
      name: 'Arreglos',
      selected: false
    },
    {
      name: 'Preguntas y respuestas',
      selected: false
    },
    {
      name: 'Agradecer a los participantes por asistir',
      selected: false
    },
  ];

constructor() { }

public clickCheck(check){
  console.log(check);
}

  ngOnInit() {}

}
