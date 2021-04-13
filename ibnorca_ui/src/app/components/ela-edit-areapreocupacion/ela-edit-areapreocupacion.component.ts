import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastController } from "@ionic/angular";

@Component({
  selector: 'app-ela-edit-areapreocupacion',
  templateUrl: './ela-edit-areapreocupacion.component.html',
  styleUrls: ['./ela-edit-areapreocupacion.component.scss'],
})
export class ElaEditAreapreocupacionComponent implements OnInit {
  @Output() guardarHallazgoEmitter = new EventEmitter<any>();
  @Output() cancelarHallazgoEmitter = new EventEmitter<any>();

  ltiposObervacion = [
    "No-Conformidades Mayores",
    "No-Conformidades Menores",
    "Oportunidades de mejora",
    "Fortaleza",
    "Conformidades",
  ];

  lNormas = ["ISO:2007", "ISO:9001", "ISO:4427", "ISO:1334"];
  ionicFormHallazgo: FormGroup;

  constructor( private toastController: ToastController,
    public formBuilder: FormBuilder) { }

    ngOnInit() {
      this.ionicFormHallazgo = this.formBuilder.group({});
    }
    editarHallazgo() {}
  
    cancelarAreaDePreocupacion() {
      if (this.cancelarHallazgoEmitter) {
        this.cancelarHallazgoEmitter.emit();
      }
    }
    guardarAreaDePreocupacion() {
      if (this.guardarHallazgoEmitter) {
        this.guardarHallazgoEmitter.emit();
      }
    }  

}
