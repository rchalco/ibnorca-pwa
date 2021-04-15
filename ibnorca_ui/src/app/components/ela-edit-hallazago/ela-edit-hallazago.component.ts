import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { ConvertFormToObject } from "src/app/interfaces/cross-ui/ConvertFormToObject";
import { Elahallazgo } from "src/app/interfaces/elaboracion_auditoria/PlanAuditoriaDTO";
import { usuario } from "src/app/interfaces/seguridad/usuario";

@Component({
  selector: "app-ela-edit-hallazago",
  templateUrl: "./ela-edit-hallazago.component.html",
  styleUrls: ["./ela-edit-hallazago.component.scss"],
})
export class ElaEditHallazagoComponent implements OnInit {
  //@Input() lNormas: string[];
  //@Input() ltiposObervacion: string[];
  tipoObservacion = null;

  @Input() elahallazgo: Elahallazgo;
  @Output() guardarHallazgoEmitter = new EventEmitter<Elahallazgo>();
  @Output() cancelarHallazgoEmitter = new EventEmitter<Elahallazgo>();

  ltiposObervacion = [
    { nemotico: "nCM", descripcion: "No-Conformidades Mayores" },
    { nemotico: "nCm", descripcion: "No-Conformidades Menores" },
    { nemotico: "F", descripcion: "Fortaleza" },
    { nemotico: "C", descripcion: "Conformidades" },
  ];

  @Input() lNormas = ["ISO:2007", "ISO:9001", "ISO:4427", "ISO:1334"];
  ionicFormHallazgo: FormGroup;

  constructor(
    private toastController: ToastController,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.ionicFormHallazgo = this.formBuilder.group({});

    if (this.elahallazgo) {
      this.tipoObservacion = this.ltiposObervacion.filter(
        (x) => x.nemotico === this.elahallazgo.tipoNemotico
      )[0];
    }
    if (!this.elahallazgo) this.elahallazgo = new Elahallazgo();
  }
  editarHallazgo() {}

  valorHallazagos(event) {
    this.elahallazgo.hallazgo = event.detail.value;
  }

  cancelarHallazo() {
    if (this.cancelarHallazgoEmitter) {
      this.cancelarHallazgoEmitter.emit();
    }
  }

  guardarHallazgo() {
    console.log("Guardar Hallazgo");
    ConvertFormToObject.convert(this.ionicFormHallazgo, this.elahallazgo);
    this.elahallazgo.fecha = this.getStringFromDate(new Date());
    this.elahallazgo.usuario = usuario.currentUser.nick;
    if (this.guardarHallazgoEmitter) {
      this.guardarHallazgoEmitter.emit(this.elahallazgo);
    }
  }

  seleccionarTipo(event) {
    console.log("seleccionar Hallazgo", event);
    this.elahallazgo.tipo = event.detail.value.descripcion;
    this.elahallazgo.tipoNemotico = event.detail.value.nemotico;
  }
  seleccionarNorma(event) {
    console.log("seleccionar Hallazgo", event);
    this.elahallazgo.normas = event.detail.value;
  }

  getStringFromDate(date: Date) {
    return (
      (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
      "/" +
      (date.getMonth() > 8
        ? date.getMonth() + 1
        : "0" + (date.getMonth() + 1)) +
      "/" +
      date.getFullYear()
    );
  }
}
