import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ResumeCicloDTO } from "src/app/interfaces/elaboracion_auditoria/ResumeCicloDTO";
import { ElaboracionAuditoriaService } from "src/app/services/elaboracion-auditoria.service";

@Component({
  selector: "app-list-ciclos",
  templateUrl: "./list-ciclos.page.html",
  styleUrls: ["./list-ciclos.page.scss"],
})
export class ListCiclosPage implements OnInit {
  constructor(
    private elaboracionAuditoriaService: ElaboracionAuditoriaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  listCiclos: ResumeCicloDTO[];
  idAuditor = 0;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params.idAuditor) {
        this.idAuditor = params.idAuditor;
        this.elaboracionAuditoriaService
          .ObtenerCiclosPorIdAuditor(this.idAuditor)
          .subscribe((x) => (this.listCiclos = x.listEntities));
      }
      else{
        this.elaboracionAuditoriaService.showMessageError("No se recibio ningun parametro de Id de auditor");
      }
    });
  }

  navMasterPlanAuditoria(_idCiclo){
    this.router.navigateByUrl("master-elaboracion-auditoria?idCicloAuditoria="+ _idCiclo);
  }
}
