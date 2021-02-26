import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-participante',
  templateUrl: './ciclo-participante.component.html',
  styleUrls: ['./ciclo-participante.component.scss'],
})
export class CicloParticipanteComponent implements OnInit {

  visibleAdd = "NO";
  constructor() { }

  lstParticipantes = [
    { Cargo: "(AUDITOR LÌDER)", ParticipanteContextWs: "Ruben Chalco", FechaDesde: "" },
    { Cargo: "(AUDITOR 1)", ParticipanteContextWs: "Ivan Vilela", FechaDesde: "" },
    { Cargo: "(AUDITOR 2)", ParticipanteContextWs: "Juan Perez", FechaDesde: "" },
    { Cargo: "(AUDITOR 3)", ParticipanteContextWs: "Ximena Prada", FechaDesde: "" },
    { Cargo: "(AUDITOR ENSAYOS CON TESTIGO)", ParticipanteContextWs: "Roxana Diaz", FechaDesde: ""},
    { Cargo: "(AUDITOR EN FORMACIÓN)", ParticipanteContextWs: "Monica Zuleta", FechaDesde: "" },
  ];

  ngOnInit() {}

  adicionarParticipante(){
    this.visibleAdd = "SI";
  }
  cancelar(){
    this.visibleAdd = "NO";
  }
  guardar(){
    this.visibleAdd = "NO";
  }
}
