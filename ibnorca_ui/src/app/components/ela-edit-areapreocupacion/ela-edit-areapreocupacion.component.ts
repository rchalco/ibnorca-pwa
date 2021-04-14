import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { Elahallazgo } from "src/app/interfaces/elaboracion_auditoria/PlanAuditoriaDTO";
import { ConvertFormToObject } from '../../interfaces/cross-ui/ConvertFormToObject';

@Component({
  selector: "app-ela-edit-areapreocupacion",
  templateUrl: "./ela-edit-areapreocupacion.component.html",
  styleUrls: ["./ela-edit-areapreocupacion.component.scss"],
})
export class ElaEditAreapreocupacionComponent implements OnInit {
  @Output() guardarHallazgoEmitter = new EventEmitter<any>();
  @Output() cancelarHallazgoEmitter = new EventEmitter<any>();
  tipoObservacion = null;
  @Input() currentHallazgo: Elahallazgo = new Elahallazgo();

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
    if (this.currentHallazgo) {
      this.tipoObservacion = {
        nemotico: this.currentHallazgo.tipoNemotico,
        descripcion: this.currentHallazgo.tipo,
      };
    }
    this.ionicFormHallazgo = this.formBuilder.group({});
  }
  editarHallazgo() {}

  cancelarAreaDePreocupacion() {
    if (this.cancelarHallazgoEmitter) {
      this.cancelarHallazgoEmitter.emit();
    }
  }

  tipoSelectChange(event){
    this.currentHallazgo.tipo = event.detail.value.descripcion;
    this.currentHallazgo.tipoNemotico = event.detail.value.nemotico;
  }
  guardarAreaDePreocupacion() {
    ConvertFormToObject.convert(this.ionicFormHallazgo,this.currentHallazgo);
    
    if (this.guardarHallazgoEmitter) {
      this.guardarHallazgoEmitter.emit(this.currentHallazgo);
    }
  }
}
