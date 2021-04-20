import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import {
  Elaadp,
  Elahallazgo,
} from "src/app/interfaces/elaboracion_auditoria/PlanAuditoriaDTO";
import { usuario } from "src/app/interfaces/seguridad/usuario";
import { ConvertFormToObject } from "../../interfaces/cross-ui/ConvertFormToObject";

@Component({
  selector: "app-ela-edit-areapreocupacion",
  templateUrl: "./ela-edit-areapreocupacion.component.html",
  styleUrls: ["./ela-edit-areapreocupacion.component.scss"],
})
export class ElaEditAreapreocupacionComponent implements OnInit {
  @Output() guardarAdpEmitter = new EventEmitter<any>();
  @Output() cancelarAdpEmitter = new EventEmitter<any>();
  @Input() currentAdp: Elaadp = new Elaadp();
  ionicFormAdp: FormGroup;

  constructor(
    private toastController: ToastController,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.ionicFormAdp = this.formBuilder.group({});
  }

  cancelarAreaDePreocupacion() {
    if (this.cancelarAdpEmitter) {
      this.cancelarAdpEmitter.emit();
    }
  }

  guardarAreaDePreocupacion() {
    ConvertFormToObject.convert(this.ionicFormAdp, this.currentAdp);
    this.currentAdp.fecha = this.getStringFromDate(new Date());
    this.currentAdp.usuario = usuario.currentUser.nick;
    if (this.guardarAdpEmitter) {
      this.guardarAdpEmitter.emit(this.currentAdp);
    }
  }

  valorDescripcion(event) {
    this.currentAdp.descripcion = event.detail.value;
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
