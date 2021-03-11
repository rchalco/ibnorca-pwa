import { Component, OnInit } from '@angular/core';
import { Pracicloparticipante, Pradireccionespasistema, Praprogramasdeauditorium } from 'src/app/interfaces/apertura_auditoria/Praprogramasdeauditorium';

@Component({
  selector: 'app-myke',
  templateUrl: './myke.page.html',
  styleUrls: ['./myke.page.scss'],
})
export class MykePage implements OnInit {
  currentPradireccionespasistema: Pradireccionespasistema;
  currentPracicloparticipante: Pracicloparticipante;
  constructor() { }

  ngOnInit() {
    this.currentPradireccionespasistema =  new Pradireccionespasistema();
    this.currentPradireccionespasistema.ciudad = "La Paz";
    this.currentPracicloparticipante = new Pracicloparticipante();
  }

}
