import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PlanAuditoriaDTO } from "src/app/interfaces/elaboracion_auditoria/PlanAuditoriaDTO";
import { ElaboracionAuditoriaService } from "src/app/services/elaboracion-auditoria.service";

@Component({
  selector: "app-master-elaboracion-auditoria",
  templateUrl: "./master-elaboracion-auditoria.page.html",
  styleUrls: ["./master-elaboracion-auditoria.page.scss"],
})
export class MasterElaboracionAuditoriaPage implements OnInit {
  select_component = "plan_auditoria";
  idCicloAuditoria = 0;
  currentPlanAuditoriaDTO: PlanAuditoriaDTO;
  area = "";
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

        this.elaboracionAuditoriaService
          .ObtenerPlanAuditoria(this.idCicloAuditoria)
          .subscribe((x) => {
            console.log("resul service master", x);
            this.currentPlanAuditoriaDTO = x.object;            
            if (x.state != 1) {
              this.elaboracionAuditoriaService.showMessageError(x.message);
            } else {
              console.log(this.currentPlanAuditoriaDTO.pracicloparticipante);
              this.area = this.currentPlanAuditoriaDTO.area;
            }
          });
      } else {
        this.elaboracionAuditoriaService.showMessageError(
          "No se recibio ningun parametro de Id de Ciclo de auditoria"
        );
      }
    });
  }

  segmentChanged(event) {
    this.select_component = event.detail.value;
  }
}
