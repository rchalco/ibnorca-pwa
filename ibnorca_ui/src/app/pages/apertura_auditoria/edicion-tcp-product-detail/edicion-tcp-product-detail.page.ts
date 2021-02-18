import { ModalController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { PopoverController, ToastController } from "@ionic/angular";

@Component({
  selector: "app-edicion-tcp-product-detail",
  templateUrl: "./edicion-tcp-product-detail.page.html",
  styleUrls: ["./edicion-tcp-product-detail.page.scss"],
})
export class EdicionTcpProductDetailPage implements OnInit {
  ionicForm: FormGroup;

  constructor(
    private toastController: ToastController,
    public formBuilder: FormBuilder,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({});
  }

  Cancelar() {
    this.modalController.dismiss();
  }

  Guardar() {
    this.presentToast("Producto guardado correctamente").then((resul) => {
      this.modalController.dismiss({
        segundoNombre: "Dario",
        departamento: "Potosi",
      });
    });
  }

  async presentToast(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
    });
    toast.present();
  }
}
