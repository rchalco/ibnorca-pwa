import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { ConvertFormToObject } from "src/app/interfaces/cross-ui/ConvertFormToObject";
import { Elahallazgo } from "src/app/interfaces/elaboracion_auditoria/PlanAuditoriaDTO";

@Component({
  selector: "app-ela-edit-hallazago",
  templateUrl: "./ela-edit-hallazago.component.html",
  styleUrls: ["./ela-edit-hallazago.component.scss"],
})
export class ElaEditHallazagoComponent implements OnInit {  
  //@Input() lNormas: string[];
  //@Input() ltiposObervacion: string[];
  @Input() elahallazgo: Elahallazgo;
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
    if (!this.elahallazgo)
      this.elahallazgo = new Elahallazgo();
  }
  editarHallazgo() {}

  cancelarHallazo() {
    if (this.cancelarHallazgoEmitter) {
      this.cancelarHallazgoEmitter.emit();
    }
  }

  guardarHallazgo() {
    console.log("Guardar Hallazgo");
    ConvertFormToObject.convert(this.ionicFormHallazgo,this.elahallazgo);
    this.presentToast("Hallazgo guardado correctamente").then((resul) => {
      if(this.guardarHallazgoEmitter){
        this.guardarHallazgoEmitter.emit(this.elahallazgo);
      }
    });

    
  }
  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
    });
    toast.present();
  }

  seleccionarTipo(event) {
    console.log("seleccionar Hallazgo",event);
    this.elahallazgo.tipo = event.detail.value;
  }
  seleccionarNorma(event) {
    console.log("seleccionar Hallazgo",event);
    this.elahallazgo.normas = event.detail.value;
  }
}
