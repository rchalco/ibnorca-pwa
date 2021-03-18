import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastController } from "@ionic/angular";
import { Praciclonormassistema } from "src/app/interfaces/apertura_auditoria/Praprogramasdeauditorium";
import { ConvertFormToObject } from "src/app/interfaces/cross-ui/ConvertFormToObject";

@Component({
  selector: "app-pra-edit-norma-sistema",
  templateUrl: "./pra-edit-norma-sistema.component.html",
  styleUrls: ["./pra-edit-norma-sistema.component.scss"],
})
export class PraEditNormaSistemaComponent implements OnInit {
  ionicForm: FormGroup;
  showBuscadorNormas = false;
  @Input() praciclonormassistema: Praciclonormassistema;
  @Output() guardarNormaEmitter = new EventEmitter<Praciclonormassistema>();
  @Output() cancelarNormaEmitter = new EventEmitter<Praciclonormassistema>();

  constructor(
    private toastController: ToastController,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({});
  }

  guardarNorma() {
    ConvertFormToObject.convert(this.ionicForm, this.praciclonormassistema);
    this.presentToast("Norma guardada correctamente").then((resul) => {
      if (this.guardarNormaEmitter) {
        this.guardarNormaEmitter.emit(this.praciclonormassistema);
      }
    });
  }

  cancelarNorma() {
    if (this.cancelarNormaEmitter) {
      this.cancelarNormaEmitter.emit(this.praciclonormassistema);
    }
  }

  mostrarBuscadorNorma(){
    console.log("ingreso al evento");
    this.showBuscadorNormas = true;
  }

  cambiarNorma(norma) {
    console.log("cambiarNorma", norma);
    this.praciclonormassistema.norma = norma.codigoNorma;
    this.showBuscadorNormas = false;
  }
  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
    });
    toast.present();
  }

 

}
