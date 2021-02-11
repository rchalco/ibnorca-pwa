import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { PopoverController, ToastController } from "@ionic/angular";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  ionicForm: FormGroup;

  constructor(
    private toastController: ToastController,
    public formBuilder: FormBuilder,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({});
  }

  guardarProduct() {
    this.presentToast("Producto guardado correctamente").then((resul) => {
      this.popoverController.dismiss({
        item: this.ionicForm.controls,
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
