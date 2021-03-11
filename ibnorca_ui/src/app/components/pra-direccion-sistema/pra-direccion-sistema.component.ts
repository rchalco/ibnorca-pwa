import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Pradireccionespasistema } from "src/app/interfaces/apertura_auditoria/Praprogramasdeauditorium";
import { ConvertFormToObject } from 'src/app/interfaces/cross-ui/ConvertFormToObject';

@Component({
  selector: 'app-pra-direccion-sistema',
  templateUrl: './pra-direccion-sistema.component.html',
  styleUrls: ['./pra-direccion-sistema.component.scss'],
})
export class PraDireccionSistemaComponent implements OnInit {
  ionicForm: FormGroup;
  @Input() pradireccionespasistema: Pradireccionespasistema;
  @Output() guardarProductEmitter= new EventEmitter<Pradireccionespasistema>();
  @Output() cancelarDireccionEmitter = new EventEmitter<Pradireccionespasistema>();
  constructor(
    private toastController: ToastController,
    public formBuilder: FormBuilder
    ) { }

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
    ConvertFormToObject.convert(this.ionicForm,this.pradireccionespasistema);
    this.presentToast("Dirección guardada correctamente").then((resul) => {
      if(this.guardarProductEmitter){
        this.guardarProductEmitter.emit(this.pradireccionespasistema);
      }
    });
  }
  cancelarDireccion() {
    if (this.cancelarDireccionEmitter) {
      this.cancelarDireccionEmitter.emit(this.pradireccionespasistema);
    }
  }
}
