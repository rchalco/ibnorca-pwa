import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { Elahallazgo } from "src/app/interfaces/elaboracion_auditoria/PlanAuditoriaDTO";

@Component({
  selector: "app-ela-edit-hallazago",
  templateUrl: "./ela-edit-hallazago.component.html",
  styleUrls: ["./ela-edit-hallazago.component.scss"],
})
export class ElaEditHallazagoComponent implements OnInit {  
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

  constructor(
    private toastController: ToastController,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    
    this.ionicFormHallazgo = this.formBuilder.group({});
  }
  editarHallazgo() {}

  cancelarHallazo() {
    if (this.cancelarHallazgoEmitter) {
      this.cancelarHallazgoEmitter.emit();
    }
  }

  guardarHallazgo() {
    if (this.guardarHallazgoEmitter) {
      this.guardarHallazgoEmitter.emit();
    }
  }
}
