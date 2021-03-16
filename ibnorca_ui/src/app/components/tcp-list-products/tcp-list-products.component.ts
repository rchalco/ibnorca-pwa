import { Component, Input, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ModalController, PopoverController } from "@ionic/angular";
import { Pradireccionespaproducto } from "src/app/interfaces/apertura_auditoria/Praprogramasdeauditorium";
@Component({
  selector: "app-tcp-list-products",
  templateUrl: "./tcp-list-products.component.html",
  styleUrls: ["./tcp-list-products.component.scss"],
})
export class TcpListProductsComponent implements OnInit {
  @Input() productList: Pradireccionespaproducto[] = [];
  @Input() nombreOrganizacion: string;
  mode = "LIST";
  operacion = "";
  currentProduct: Pradireccionespaproducto;
  currentIndex = -1;
  constructor(
    private popoverController: PopoverController,
    public formBuilder: FormBuilder,
    private modalController: ModalController
  ) {}

  display = false;
  ngOnInit() {}
  toggle() {
    this.display = !this.display;
  }

  editar(product, i) {
    this.mode = "EDIT";
    this.operacion = "UPD";
    this.currentProduct = product;
    this.currentIndex = i;
  }

  eliminar(index) {
    console.log("evento eliminar", index);
    this.productList.splice(index, 1);
  }

  adicionar() {
    this.mode = "EDIT";
    this.operacion = "ADD";
    this.currentProduct = new Pradireccionespaproducto();
  }

  guardarProducto(event) {
    this.mode = "LIST";
    if (this.operacion === "UPD") this.productList[this.currentIndex] = event;
    else this.productList.push(event);
  }
  cancelarProducto(event) {
    this.mode = "LIST";
  }
}
