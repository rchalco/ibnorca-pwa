import { Praciclocronograma } from './../../interfaces/apertura_auditoria/Praprogramasdeauditorium';
import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { CustomInputComponent } from '../custom-input/custom-input.component';
import { ParamHorariosComponent } from '../param-horarios/param-horarios.component';

@Component({
  selector: 'app-pra-cronograma',
  templateUrl: './pra-cronograma.component.html',
  styleUrls: ['./pra-cronograma.component.scss'],
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
    console.log('currentPraciclocronogramas', this.currentPraciclocronogramas);
  }
  async mostrarMesesProgramado(_event) {
    const popover = await this.popoverController.create({
      component: CustomInputComponent,
      componentProps: {
        formGruop: this.cronogramaForm,
        label: 'Mes Programado',
        name: 'FechaEjecucion',
        type: 'datetime',
        form: 'form',
        formatDate: 'month',
        defaultValue: Date(),
      },
      event: _event,
      mode: 'md',
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log('Padre', info);
    this.currentPraciclocronogramas.mesProgramado = info.data.item;
  }

  async mostrarMesesReprogamado(_event) {
    const popover = await this.popoverController.create({
      component: CustomInputComponent,
      componentProps: {
        formGruop: this.cronogramaForm,
        label: 'Mes Reprogramado',
        name: 'FechaEjecucion',
        type: 'datetime',
        form: 'form',
        formatDate: 'month',
        defaultValue: Date(),
      },
      event: _event,
      mode: 'md',
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log('Padre', info);
    this.currentPraciclocronogramas.mesReprogramado = info.data.item;
  }

  async mostrarFechaEjecucion(_event) {
    const popover = await this.popoverController.create({
      component: CustomInputComponent,
      componentProps: {
        formGruop: this.cronogramaForm,
        label: 'Fecha Eejcucion',
        name: 'FechaEjecucion',
        type: 'datetime',
        form: 'form',
        defaultValue: Date(),
      },
      event: _event,
      mode: 'md',
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log('Padre', info);
    this.currentPraciclocronogramas.fechaInicioDeEjecucionDeAuditoria =
      info.data.item;
  }

  async mostrarFechaFin(_event) {
    const popover = await this.popoverController.create({
      component: CustomInputComponent,
      componentProps: {
        formGruop: this.cronogramaForm,
        label: 'Fecha Fin Eejcucion',
        name: 'FechaEjecucion',
        type: 'datetime',
        form: 'form',
        defaultValue: Date(),
      },
      event: _event,
      mode: 'md',
      backdropDismiss: false,
      size: 'auto',
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log('Padre', info);
    this.currentPraciclocronogramas.fechaDeFinDeEjecucionAuditoria =
      info.data.item;
  }

  async mostrarDiasInsituCronograma(_event) {
    const popover = await this.popoverController.create({
      component: CustomInputComponent,
      componentProps: {
        formGruop: this.cronogramaForm,
        label: 'CANTIDAD DE DIAS',
        name: 'cantidad_dias',
        type: 'number',
        form: 'form',
        defaultValue: Date(),
      },
      event: _event,
      mode: 'md',
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log('Padre', info);
    this.currentPraciclocronogramas.diasInsitu = info.data.item;
  }

  async mostrarDiasRemotoCronograma(_event) {
    const popover = await this.popoverController.create({
      component: CustomInputComponent,
      componentProps: {
        formGruop: this.cronogramaForm,
        label: 'CANTIDAD DE DIAS',
        name: 'cantidad_dias',
        type: 'number',
        form: 'form',
        defaultValue: Date(),
      },
      event: _event,
      mode: 'md',
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log('Padre', info);
    this.currentPraciclocronogramas.diasRemoto = info.data.item;
  }

  async mostrarHorarioCronograma(_event) {
    const popover = await this.popoverController.create({
      component: ParamHorariosComponent,
      componentProps: {
        horario: this.currentPraciclocronogramas.horarioTrabajo,
      },
      event: _event,
      mode: 'md',
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log('Padre', info);
    this.currentPraciclocronogramas.horarioTrabajo = info.data.item;
  }
}
