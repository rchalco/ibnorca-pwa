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
  @Input() listaDirecciones: string[];
  participantes = "";
  selectedParticipantes: string[];

  ionicFormHorario: FormGroup;
  constructor(
    private toastController: ToastController,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    if (!this.currentElacronogama)
      this.currentElacronogama = new Elacronogama();
    this.ionicFormHorario = this.formBuilder.group({});
    this.selectedParticipantes = new Array<string>();
    this.currentElacronogama.auditor?.split(";").forEach((x) => {
      this.selectedParticipantes.push(x);
    });
  }

  seleccionarParticipante(event) {
    console.log("se selecciono particiapante", event);
    console.log("valor actual de la lista", this.selectedParticipantes);
    if (event.detail) {
      event.detail.value.forEach((element) => {
        this.participantes = this.participantes + element.nombreCompleto + ";";
      });
    }
  }

  seleccionarDireccion(event) {
    console.log("se selecciono direccion", event);
    this.currentElacronogama.direccion = event.detail.value;
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
    this.currentElacronogama.auditor = this.participantes;
    console.log("seleccionarParticipante", this.currentElacronogama);
    if (this.guardarCronogramaEmitter) {
      this.guardarCronogramaEmitter.emit(this.currentElacronogama);
    }
  }
}
