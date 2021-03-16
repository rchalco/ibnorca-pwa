import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { PopoverController, ToastController } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Pradireccionespaproducto } from "src/app/interfaces/apertura_auditoria/Praprogramasdeauditorium";
import { EmitterVisitorContext } from '@angular/compiler';
import { ConvertFormToObject, ConvertObjectToForm } from 'src/app/interfaces/cross-ui/ConvertFormToObject';
import { Localizacion } from 'src/app/interfaces/General/Localizacion';

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  ionicForm: FormGroup;
  showBuscadorNormas = false;
  @Input() pradireccionespaproducto: Pradireccionespaproducto;
  @Output() guardarProductEmitter= new EventEmitter<Pradireccionespaproducto>();
  @Output() cancelarProductEmitter= new EventEmitter<Pradireccionespaproducto>();
  mode: string = "default-pais";
  constructor(
    private toastController: ToastController,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({});
  }

  guardarProduct() {
    ConvertFormToObject.convert(this.ionicForm,this.pradireccionespaproducto);
    this.presentToast("Producto guardado correctamente").then((resul) => {
      if(this.guardarProductEmitter){
        this.guardarProductEmitter.emit(this.pradireccionespaproducto);
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

  cambiarNorma(norma) {
    console.log("cambiarNorma", norma);
    this.pradireccionespaproducto.norma = norma.codigoNorma;
    this.showBuscadorNormas = false;
  }
  mostrarBuscadorNorma(){
    console.log("ingreso al evento");
    this.showBuscadorNormas = true;
  }
  cancelar(){
    this.showBuscadorNormas = false;
    if(this.cancelarProductEmitter){
      this.cancelarProductEmitter.emit(this.pradireccionespaproducto);
    }
  }
  cambiarModoPais() {
    this.mode = "edit-pais";
  }
  localizacionSeleccionda(localizacion: Localizacion) {
    this.pradireccionespaproducto.pais = localizacion.pais.paisNombre;
    this.pradireccionespaproducto.estado = localizacion.estado.estNombre;
    this.pradireccionespaproducto.ciudad = localizacion.ciudad.nomCiudad;
    //ConvertObjectToForm.convert(this.ionicForm, this.pradireccionespaproducto);
    ConvertFormToObject.convert(this.ionicForm, this.pradireccionespaproducto);
    this.mode = "default-pais";
  }  
}
