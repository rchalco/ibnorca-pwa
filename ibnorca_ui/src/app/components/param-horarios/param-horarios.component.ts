import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-param-horarios",
  templateUrl: "./param-horarios.component.html",
  styleUrls: ["./param-horarios.component.scss"],
})
export class ParamHorariosComponent implements OnInit {
  @Input() horario: string;
  @Output() seleccionarHorarioEmit = new EventEmitter<string>();
  horarioIni: Date = new Date();
  horarioFin: Date = new Date();

  constructor(private popoverController: PopoverController) {}

  ngOnInit() {
    if (this.horario) {
      let horaIniAux = this.horario.substring(0, 5);
      let horaFinAux = this.horario.substring(5, 5);
      var time = horaIniAux.split(":");
      this.horarioIni.setHours(parseInt(time[0]));
      this.horarioIni.setMinutes(parseInt(time[1]));
      time = horaFinAux.split(":");
      this.horarioFin.setHours(parseInt(time[0]));
      this.horarioFin.setMinutes(parseInt(time[1]));
    }
  }

  selectionarHorario() {
    console.log("horarioIni", this.horarioIni);
    console.log("horarioFin", this.horarioFin);
    let horarioFormat =
      this.pad(this.horarioIni.getHours(), 2) +
      ":" +
      this.pad(this.horarioIni.getMinutes(), 2) +
      "-" +
      this.pad(this.horarioFin.getHours(), 2) +
      ":" +
      this.pad(this.horarioFin.getMinutes(), 2);
    console.log("horario sleccionado", horarioFormat);
    if (this.seleccionarHorarioEmit) {
      this.seleccionarHorarioEmit.emit(horarioFormat);
    }
    if (this.popoverController) {
      this.popoverController.dismiss({
        item: horarioFormat,
      });
    }
  }

  pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }
}
