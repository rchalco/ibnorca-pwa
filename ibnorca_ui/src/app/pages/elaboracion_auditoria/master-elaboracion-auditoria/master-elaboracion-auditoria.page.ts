import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  Elacronogama,
  Elahallazgo,
  PlanAuditoriaDTO,
} from "src/app/interfaces/elaboracion_auditoria/PlanAuditoriaDTO";
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

  guardarCronograma(event) {
    console.log("llego al lista de crongrma", event);
    if (!this.currentPlanAuditoriaDTO.elaauditorium.elacronogamas) {
      this.currentPlanAuditoriaDTO.elaauditorium.elacronogamas = new Array<Elacronogama>();
    }
    this.currentPlanAuditoriaDTO.elaauditorium.elacronogamas = this.currentPlanAuditoriaDTO.elaauditorium.elacronogamas.concat(
      event
    );
    console.log("antes de enviar al registro", this.currentPlanAuditoriaDTO);
    this.elaboracionAuditoriaService
      .RegistrarPlanAuditoria(this.currentPlanAuditoriaDTO)
      .subscribe((x) => {
        console.log("resul  RegistrarPlanAuditoria", x);
        this.elaboracionAuditoriaService.showMessageResponse(x);
        // if (x.state === 1) {
        //   this.currentPlanAuditoriaDTO = x.object;
        // }
      });
  }

  guardarHallazgo(event) {
    console.log("llego al lista de hallazgo", event);
    console.log("llego al lista de hallazgo", event[0]);
    this.currentPlanAuditoriaDTO.elaauditorium.elahallazgos = event.filter(
      (x) => 1 === 1
    );
    //this.currentPlanAuditoriaDTO.elaauditorium.elahallazgos = new Array();
    // event.forEach((element) => {
    //   let newElahallazgo = new Elahallazgo();
    //   newElahallazgo.fecha = element.fecha;
    //   newElahallazgo.hallazgo = element.hallazgo;
    //   newElahallazgo.idelaAuditoria = element.idelaAuditoria;
    //   newElahallazgo.idelahallazgo = element.idelahallazgo;
    //   newElahallazgo.normas = element.normas;
    //   newElahallazgo.proceso = element.proceso;
    //   newElahallazgo.sitio = element.sitio;
    //   newElahallazgo.tipo = element.tipo;
    //   newElahallazgo.tipoNemotico = element.tipoNemotico;
    //   newElahallazgo.usuario = element.usuario;

    //   this.currentPlanAuditoriaDTO.elaauditorium.elahallazgos.push(newElahallazgo);
    // });
    //this.currentPlanAuditoriaDTO.elaauditorium.elahallazgos.concat(event);
    console.log("antes de enviar al registro", this.currentPlanAuditoriaDTO);
    this.elaboracionAuditoriaService
      .RegistrarPlanAuditoria(this.currentPlanAuditoriaDTO)
      .subscribe((x) => {
        console.log("resul  RegistrarPlanAuditoria", x);
        this.elaboracionAuditoriaService.showMessageResponse(x);
        // if (x.state === 1) {
        //   this.currentPlanAuditoriaDTO = x.object;
        // }
      });
  }

  segmentChanged(event) {
    this.select_component = event.detail.value;
  }
}
