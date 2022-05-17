import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-param-horarios',
  templateUrl: './param-horarios.component.html',
  styleUrls: ['./param-horarios.component.scss'],
})
export class ParamHorariosComponent implements OnInit {
  @Input() horario: string;
  @Output() seleccionarHorarioEmit = new EventEmitter<string>();
  horarioIni = new Date();
  horarioFin = new Date();
  horarioFinFormat = '';
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {
    if (this.horario) {
      const horaIniAux = this.horario.substring(0, 5);
      const horaFinAux = this.horario.substring(5, 5);
      let time = horaIniAux.split(':');
      this.horarioIni.setHours(parseInt(time[0], 10));
      this.horarioIni.setMinutes(parseInt(time[1], 10));
      time = horaFinAux.split(':');
      this.horarioFin.setHours(parseInt(time[0], 10));
      this.horarioFin.setMinutes(parseInt(time[1], 10));
    }
  }

  selectionarHorarioIni(event) {
    //console.log('hora ini', event);
    this.horarioIni = new Date(event.detail.value);
  }
  selectionarHorarioFin(event) {
    this.horarioFin = new Date(event.detail.value);
    // console.log('horarioIni', this.horarioIni);
    // console.log('horarioFin', this.horarioFin);
    this.horarioFinFormat =
      this.pad(this.horarioIni.getHours(), 2) +
      ':' +
      this.pad(this.horarioIni.getMinutes(), 2) +
      '-' +
      this.pad(this.horarioFin.getHours(), 2) +
      ':' +
      this.pad(this.horarioFin.getMinutes(), 2);
  }

  confirmarSeleccion() {
    if (this.seleccionarHorarioEmit) {
      this.seleccionarHorarioEmit.emit(this.horarioFinFormat);
    }
    if (this.popoverController) {
      this.popoverController.dismiss({
        item: this.horarioFinFormat,
      });
    }
  }

  pad(num, size) {
    num = num.toString();
    while (num.length < size) {
      num = '0' + num;
    }
    return num;
  }
}
