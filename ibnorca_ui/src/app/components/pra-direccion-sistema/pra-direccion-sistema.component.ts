import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { Pradireccionespasistema } from "src/app/interfaces/apertura_auditoria/Praprogramasdeauditorium";
import {
  ConvertFormToObject,
  ConvertObjectToForm,
} from "src/app/interfaces/cross-ui/ConvertFormToObject";
import { Localizacion } from "src/app/interfaces/General/Localizacion";

@Component({
  selector: "app-pra-direccion-sistema",
  templateUrl: "./pra-direccion-sistema.component.html",
  styleUrls: ["./pra-direccion-sistema.component.scss"],
})
export class PraDireccionSistemaComponent implements OnInit {
  ionicForm: FormGroup;
  showBuscadorNormas = false;
  @Input() pradireccionespasistema: Pradireccionespasistema;
  @Output() guardarDireccionEmitter = new EventEmitter<Pradireccionespasistema>();
  @Output() cancelarDireccionEmitter = new EventEmitter<Pradireccionespasistema>();
  mode: string = "default-pais";
  constructor(
    private toastController: ToastController,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({});
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
    });
    toast.present();
  }
  guardarDireccion() {
    console.log("Guardar Direcc");
    ConvertFormToObject.convert(this.ionicForm, this.pradireccionespasistema);
    this.presentToast("Dirección guardada correctamente").then((resul) => {
      if (this.guardarDireccionEmitter) {
        this.guardarDireccionEmitter.emit(this.pradireccionespasistema);
      }
    });
  }
  cancelar() {
    console.log("Cancelar Direcc");
    if (this.cancelarDireccionEmitter) {
      this.cancelarDireccionEmitter.emit(this.pradireccionespasistema);
    }
  }
  cambiarModoPais() {
    this.mode = "edit-pais";
  }

  

  localizacionSeleccionda(localizacion: Localizacion) {
    ConvertFormToObject.convert(this.ionicForm, this.pradireccionespasistema);
    this.pradireccionespasistema.pais = localizacion.pais.paisNombre;
    this.pradireccionespasistema.departamento = localizacion.estado.estNombre;
    this.pradireccionespasistema.ciudad = localizacion.ciudad.nomCiudad;
    ConvertObjectToForm.convert(this.ionicForm, this.pradireccionespasistema);
    this.mode = "default-pais";
  }
}
