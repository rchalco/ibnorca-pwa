import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ModalController, PopoverController } from "@ionic/angular";
import { Personal } from "src/app/interfaces/apertura_auditoria/personal";
import { Pradireccionespaproducto } from "src/app/interfaces/apertura_auditoria/Praprogramasdeauditorium";
import { Elacronogama } from "src/app/interfaces/elaboracion_auditoria/PlanAuditoriaDTO";
@Component({
  selector: "app-tcp-list-products",
  templateUrl: "./tcp-list-products.component.html",
  styleUrls: ["./tcp-list-products.component.scss"],
})
export class TcpListProductsComponent implements OnInit {
  @Input() productList: Pradireccionespaproducto[] = [];
  @Input() nombreOrganizacion: string;
  @Input() addCronograma: boolean = false;
  @Input() listaParticipantes: Personal[];
  @Input() allowDelete: boolean = true;  
  @Output() guardarCronogramaEmitter = new EventEmitter<any>();
  @Output() eliminarCronogramaEmitter = new EventEmitter<any>();

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

  guardarCronograma(event) {
    if (this.guardarCronogramaEmitter) {
      this.guardarCronogramaEmitter.emit(event);
    }
  }
  cancelarProducto(event) {
    this.mode = "LIST";
  }

  getLlaves(producto) {
    let llave = {
      idDireccionPaproducto: producto.idDireccionPaproducto,
      idDireccionPasistema: null,
    };
    return llave;
  }

  eliminarCronograma(event){
    if(this.eliminarCronogramaEmitter){
      this.eliminarCronogramaEmitter.emit(event);
    }
  }
}
