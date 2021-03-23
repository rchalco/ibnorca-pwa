import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-master-elaboracion-auditoria",
  templateUrl: "./master-elaboracion-auditoria.page.html",
  styleUrls: ["./master-elaboracion-auditoria.page.scss"],
})
export class MasterElaboracionAuditoriaPage implements OnInit {
  //select_component = "lista_verif";
  select_component = "plan_auditoria"

  constructor() {}

  ngOnInit() {}

  segmentChanged(event) {
    /*if (event.detail.value === 'todos') {
			this.publisherSelect = '';
			return;
		}
		this.publisherSelect = event.detail.value;*/
    this.select_component = event.detail.value;
  }
}
