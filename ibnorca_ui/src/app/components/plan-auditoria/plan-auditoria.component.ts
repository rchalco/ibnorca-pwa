import { DatePipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { PopoverController } from "@ionic/angular";
import { ProductList } from "src/app/interfaces/apertura_auditoria/product_list";
import { PlanAuditoriaDTO } from "src/app/interfaces/elaboracion_auditoria/PlanAuditoriaDTO";
import { ElaboracionAuditoriaService } from "src/app/services/elaboracion-auditoria.service";
import { CustomInputComponent } from "../custom-input/custom-input.component";
interface Oficina {
  Id: Number;
  NombreOficina: string;
}
@Component({
  selector: "app-plan-auditoria",
  templateUrl: "./plan-auditoria.component.html",
  styleUrls: ["./plan-auditoria.component.scss"],
})
export class PlanAuditoriaComponent implements OnInit {
  mode = "TCP";
  @Input() idCicloAuditoria = 0;
  currentPlanAuditoriaDTO: PlanAuditoriaDTO;
  constructor(
    public formBuilder: FormBuilder,
    private popoverController: PopoverController,
    public datepipe: DatePipe,
    private elaboracionAuditoriaService: ElaboracionAuditoriaService
  ) {}

  ngOnInit() {
    this.elaboracionAuditoriaService
      .ObtenerPlanAuditoria(this.idCicloAuditoria)
      .subscribe((x) => {
        console.log("resul service", x);
        this.currentPlanAuditoriaDTO = x.object;
        if (x.state != 1) {
          this.elaboracionAuditoriaService.showMessageError(x.message);
        } else {
          this.currentPlanAuditoriaDTO.pracicloparticipante.forEach((yy) => {
            yy._cargo = JSON.parse(yy.cargoDetalleWs);
            if (yy._cargo["cod_tipoauditor"]) {
              yy._cargo.idCargoPuesto = yy._cargo["cod_tipoauditor"];
              yy._cargo.cargoPuesto = yy._cargo["descripcion"];
            }
            if (yy.participanteDetalleWs) {
              yy._personal = JSON.parse(yy.participanteDetalleWs);
            }
          });
          this.mode =
            this.currentPlanAuditoriaDTO.pradireccionespaproducto.length > 0
              ? "TCP"
              : "TCS";
        }
      });
  }

  adicionarCronograma() {}
}
