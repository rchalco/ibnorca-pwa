import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { MesesComponent } from '../meses/meses.component';

@Component({
  selector: 'app-pra-cronograma',
  templateUrl: './pra-cronograma.component.html',
  styleUrls: ['./pra-cronograma.component.scss'],
})
export class PraCronogramaComponent implements OnInit {
  mesProgramado = "ENERO";
  mesReprogramado = "FEBRERO";
  fechaEjecucion = "01/01/2000";
  cronogramaForm: FormGroup;
  fechaFin = "01/01/2000";

  constructor(
    private popoverController: PopoverController,
    public datepipe: DatePipe,
    public formBuilder: FormBuilder) { 

  }

  ngOnInit() {
    this.cronogramaForm = this.formBuilder.group({});
  }
  async mostrarMesesProgramado(event) {
    const popover = await this.popoverController.create({
      component: MesesComponent,
      event: event,
      mode: "ios",
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log("Padre", info);
    this.mesProgramado = info.data.item.label;
  }

  async mostrarMesesReprogamado(event) {
    const popover = await this.popoverController.create({
      component: MesesComponent,
      event: event,
      mode: "ios",
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log("Padre", info);
    this.mesProgramado = info.data.item.label;
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
    this.fechaEjecucion =this.datepipe.transform(info.data.item, 'dd/MM/yyyy');
  }

  async mostrarFechaFin(event) {
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
    this.fechaFin =this.datepipe.transform(info.data.item, 'dd/MM/yyyy');
  }

}
