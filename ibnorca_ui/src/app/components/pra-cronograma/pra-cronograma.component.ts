import { Praciclocronograma } from "./../../interfaces/apertura_auditoria/Praprogramasdeauditorium";
import { DatePipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { PopoverController } from "@ionic/angular";
import { CustomInputComponent } from "../custom-input/custom-input.component";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

@Component({
  selector: "app-pra-cronograma",
  templateUrl: "./pra-cronograma.component.html",
  styleUrls: ["./pra-cronograma.component.scss"],
})
export class PraCronogramaComponent implements OnInit {
  @Input() currentPraciclocronogramas: Praciclocronograma;
  cronogramaForm: FormGroup;

  constructor(
    private popoverController: PopoverController,
    public datepipe: DatePipe,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.cronogramaForm = this.formBuilder.group({});
    console.log("currentPraciclocronogramas", this.currentPraciclocronogramas);
  }
  async mostrarMesesProgramado(event) {
    const popover = await this.popoverController.create({
      component: CustomInputComponent,
      componentProps: {
        formGruop: this.cronogramaForm,
        label: "Mes Programado",
        name: "FechaEjecucion",
        type: "datetime",
        form: "form",
        formatDate: "MM/YYYY",
        defaultValue: Date(),
      },
      event: event,
      mode: "ios",
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log("Padre", info);
    this.currentPraciclocronogramas.mesProgramado = info.data.item;    
  }

  async mostrarMesesReprogamado(event) {
    const popover = await this.popoverController.create({
      component: CustomInputComponent,
      componentProps: {
        formGruop: this.cronogramaForm,
        label: "Mes Reprogramado",
        name: "FechaEjecucion",
        type: "datetime",
        form: "form",
        formatDate: "MM/YYYY",
        defaultValue: Date(),
      },
      event: event,
      mode: "ios",
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log("Padre", info);
    this.currentPraciclocronogramas.mesReprogramado = info.data.item;    
  }

  async mostrarFechaEjecucion(event) {
    const popover = await this.popoverController.create({
      component: CustomInputComponent,
      componentProps: {
        formGruop: this.cronogramaForm,
        label: "Fecha Eejcucion",
        name: "FechaEjecucion",
        type: "datetime",
        form: "form",
        defaultValue: Date(),
      },
      event: event,
      mode: "ios",
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log("Padre", info);
    this.currentPraciclocronogramas.fechaInicioDeEjecucionDeAuditoria = info.data.item;    
  }

  async mostrarFechaFin(event) {
    const popover = await this.popoverController.create({
      component: CustomInputComponent,
      componentProps: {
        formGruop: this.cronogramaForm,
        label: "Fecha Fin Eejcucion",
        name: "FechaEjecucion",
        type: "datetime",
        form: "form",
        defaultValue: Date(),
      },
      event: event,
      mode: "ios",
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log("Padre", info);
    this.currentPraciclocronogramas.fechaDeFinDeEjecucionAuditoria = info.data.item;    
  }


  async mostrarDiasCronograma(event) {
    const popover = await this.popoverController.create({
      component: CustomInputComponent,
      componentProps: {
        formGruop: this.cronogramaForm,
        label: "CANTIDAD DE DIAS",
        name: "cantidad_dias",
        type: "number",
        form: "form",
        defaultValue: Date(),
      },
      event: event,
      mode: "ios",
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log("Padre", info);
    this.currentPraciclocronogramas.cantidadDeDiasTotal = info.data.item;    
  }
}
