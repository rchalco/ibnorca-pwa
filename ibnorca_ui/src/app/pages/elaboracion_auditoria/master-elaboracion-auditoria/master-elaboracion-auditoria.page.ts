import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ElaboracionAuditoriaService } from "src/app/services/elaboracion-auditoria.service";

@Component({
  selector: "app-master-elaboracion-auditoria",
  templateUrl: "./master-elaboracion-auditoria.page.html",
  styleUrls: ["./master-elaboracion-auditoria.page.scss"],
})
export class MasterElaboracionAuditoriaPage implements OnInit {
  select_component = "plan_auditoria";
  idCicloAuditoria = 0;

  constructor(
    private route: ActivatedRoute,
    private elaboracionAuditoriaService: ElaboracionAuditoriaService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params.idCicloAuditoria) {
        this.idCicloAuditoria = params.idCicloAuditoria;
        console.log("Id de ciclo", this.idCicloAuditoria);
      } else {
        this.elaboracionAuditoriaService.showMessageError(
          "No se recibio ningun parametro de Id de Ciclo de auditoria"
        );
      }
    });
  }

  segmentChanged(event) {
    /*if (event.detail.value === 'todos') {
			this.publisherSelect = '';
			return;
		}
		this.publisherSelect = event.detail.value;*/
    this.select_component = event.detail.value;
  }
}
