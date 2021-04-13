import {
  Elaauditorium,
  Elacronogama,
} from "./../../interfaces/elaboracion_auditoria/PlanAuditoriaDTO";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { Personal } from "src/app/interfaces/apertura_auditoria/personal";
import { ConvertFormToObject } from "src/app/interfaces/cross-ui/ConvertFormToObject";

@Component({
  selector: "app-ela-cronograma",
  templateUrl: "./ela-cronograma.component.html",
  styleUrls: ["./ela-cronograma.component.scss"],
})
export class ElaCronogramaComponent implements OnInit {
  @Input() currentElacronogama: Elacronogama;
  @Output() guardarCronogramaEmitter = new EventEmitter<Elacronogama>();
  @Output() cancelarCronogramaEmitter = new EventEmitter<Elacronogama>();
  @Input() listaParticipantes: Personal[];
  selectedParticipantes = null;

  ionicFormHorario: FormGroup;
  constructor(
    private toastController: ToastController,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.currentElacronogama = new Elacronogama();
    this.ionicFormHorario = this.formBuilder.group({});
  }

  seleccionarParticipante(event) {
    console.log("se selecciono particiapante", event);
  }

  cancelar() {
    if (this.cancelarCronogramaEmitter) {
      this.cancelarCronogramaEmitter.emit(this.currentElacronogama);
    }
  }

  guardarCronograma() {
    ConvertFormToObject.convert(
      this.ionicFormHorario,
      this.currentElacronogama
    );
    console.log("seleccionarParticipante", this.seleccionarParticipante);
    if (this.guardarCronogramaEmitter) {
      this.guardarCronogramaEmitter.emit(this.currentElacronogama);
    }
  }
}
