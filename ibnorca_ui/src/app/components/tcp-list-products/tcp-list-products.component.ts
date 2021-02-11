import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { PopoverController } from "@ionic/angular";
import { ProductList } from "src/app/interfaces/apertura_auditoria/product_list";
import { ProductDetailComponent } from "../product-detail/product-detail.component";

@Component({
  selector: "app-tcp-list-products",
  templateUrl: "./tcp-list-products.component.html",
  styleUrls: ["./tcp-list-products.component.scss"],
})
export class TcpListProductsComponent implements OnInit {
  ionicForm: FormGroup;
  constructor(private popoverController: PopoverController, public formBuilder: FormBuilder) {}
  @Input() productList: ProductList[] = [];
  display = false;
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({});
  }
  toggle() {
    console.log("se expande");
    this.display = !this.display;
  }
  guardarData(){

  }
  
  async mostrarEdicionProducto(event) {
    console.log("mostramos popover");
    const popover = await this.popoverController.create({
      component: ProductDetailComponent,
      /*componentProps: {
        formGruop: this.cronogramaForm,
        label: "Fecha Eejcucion",
        name: "FechaEjecucion",
        type: "datetime",
        form: "form",
        defaultValue: Date(),
      },*/
      event: event,
      mode: "md",
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log("Padre", info);
  }
}
