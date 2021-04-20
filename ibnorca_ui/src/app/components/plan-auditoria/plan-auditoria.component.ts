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
  constructor(
    public formBuilder: FormBuilder,
    private popoverController: PopoverController,
    public datepipe: DatePipe,
    private elaboracionAuditoriaService: ElaboracionAuditoriaService
  ) {}

  listaParticipantes: Personal[];

  ngOnInit() {
    this.listaParticipantes = this.currentPlanAuditoriaDTO["listaParticipantes"];    
    this.mode = this.currentPlanAuditoriaDTO.area;
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
