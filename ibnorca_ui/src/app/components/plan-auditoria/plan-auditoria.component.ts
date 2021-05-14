import { DatePipe } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { PopoverController } from "@ionic/angular";
import { CargoItem } from "src/app/interfaces/apertura_auditoria/cargo_item";
import { Personal } from "src/app/interfaces/apertura_auditoria/personal";
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
  @Input() currentPlanAuditoriaDTO: PlanAuditoriaDTO;
  @Output() guardarCronogramaEmitter = new EventEmitter<any>();
  @Output() eliminarCronogramaEmitter = new EventEmitter<any>();
  @Input() listaDirecciones: string[] = [];
  DocumentacionReferencia: string = "Norma NAG E 210 (2005) Sistema de tubería compuesta de acero-Polietileno unidos por termo fusión para conducción de gas natural y gases licuados de petróleo en instalaciones internas.  \n" +
    "Sistema de Gestión conforme a los requisitos del Anexo 1 de la Especificación Esquema 5 para la certificación de productos con Sello IBNORCA. \n" +
    "Reglamento Particular de Producto RP-TCP - 65 \n" +
    "Procedimientos y otra documentación de la organización. \n";

  constructor(
    public formBuilder: FormBuilder,
    private popoverController: PopoverController,
    public datepipe: DatePipe,
    private elaboracionAuditoriaService: ElaboracionAuditoriaService
  ) { }

  listaParticipantes: Personal[];

  ngOnInit() {
    this.listaParticipantes = this.currentPlanAuditoriaDTO["listaParticipantes"];
    this.mode = this.currentPlanAuditoriaDTO.area;
    this.currentPlanAuditoriaDTO.pradireccionespaproducto.forEach(x => {
      if (this.listaDirecciones.indexOf(x.direccion) === -1) {
        this.listaDirecciones.push(x.direccion);
      }
    });

    this.currentPlanAuditoriaDTO.pradireccionespasistema.forEach(x => {
      if (x.dias > 0 && this.listaDirecciones.indexOf(x.direccion) === -1) {
        this.listaDirecciones.push(x.direccion);
      }
    });
  }

  guardarCronograma(event) {
    if (this.guardarCronogramaEmitter) {
      this.guardarCronogramaEmitter.emit(event);
    }
  }

  eliminarCronograma(event) {
    if (this.eliminarCronogramaEmitter) {
      this.eliminarCronogramaEmitter.emit(event);
    }
  }

}
