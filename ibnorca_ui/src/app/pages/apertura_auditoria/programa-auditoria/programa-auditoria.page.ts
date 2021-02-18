import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ModalController, PopoverController } from "@ionic/angular";
import { CustomInputComponent } from "src/app/components/custom-input/custom-input.component";
import { MesesComponent } from "src/app/components/meses/meses.component";
import { TcpListProductsComponent } from "src/app/components/tcp-list-products/tcp-list-products.component";
import { ProductList } from "src/app/interfaces/apertura_auditoria/product_list";
import { DatePipe } from '@angular/common'
import { ProductDetailComponent } from "src/app/components/product-detail/product-detail.component";
import { SystemList } from "src/app/interfaces/apertura_auditoria/system_list";

@Component({
  selector: "app-programa-auditoria",
  templateUrl: "./programa-auditoria.page.html",
  styleUrls: ["./programa-auditoria.page.scss"],
})
export class ProgramaAuditoriaPage implements OnInit {
  mode = "TCP";
  //mode = "TCS";
  @ViewChild(TcpListProductsComponent, { static: false })
  listProducts: TcpListProductsComponent;

  listDTOProduct: ProductList[] = [];
  listDTOSystemList: SystemList[] = [];
  cronogramaForm: FormGroup;
  defaultDate = new Date();
  mesProgramado = "ENERO";
  mesReprogramado = "FEBRERO";
  fechaEjecucion = "01/01/2000";
  fechaFin = "01/01/2000";
  constructor(
    public modalController: ModalController,
    public formBuilder: FormBuilder,
    private popoverController: PopoverController,
    public datepipe: DatePipe
  ) {
    for (let index = 0; index < 8; index++) {
      var elementP = new ProductList();
      elementP.ciudad = "LA PAZ";
      elementP.departamento = "LA PAZ";
      elementP.direccion = "Calle Sucre, Nro 33 Casa Rosada";
      elementP.marca = "XXXXXXXXXX";
      elementP.nombre = "Producto XX";
      elementP.norma = "NB ISO xxx/XXX 2015";
      elementP.pais = "BOLIVIA";
      elementP.sello = "1";
      this.listDTOProduct.push(elementP);
    }

    for (let index = 0; index < 8; index++) {
      var elementS = new SystemList();
      elementS.ciudad = "LA PAZ";
      elementS.oficina = "PLANTA SUC. LA PAZ";
      elementS.departamento = "LA PAZ";
      elementS.direccion = "Av Pulacayo, Nro 33 Casa Rosada";
      elementS.dias = 0;            
      elementS.pais = "BOLIVIA";      
      this.listDTOSystemList.push(elementS);
    }
  }

  ngOnInit() {
    this.cronogramaForm = this.formBuilder.group({});
  }
  async mostrarSitios() {
    console.log("llamando a mostrar sitios");
  }
  enviarCronogramaForm() {}

  getDateMesProgramado(event) {}

  async mostrarMesesProgramado(event) {
    const popover = await this.popoverController.create({
      component: MesesComponent,
      event: event,
      mode: "ios",
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log("Padre", info);
    this.mesProgramado = info.data.item.label;
  }

  async mostrarMesesReprogamado(event) {
    const popover = await this.popoverController.create({
      component: MesesComponent,
      event: event,
      mode: "ios",
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log("Padre", info);
    this.mesReprogramado = info.data.item.label;
  }

  async mostrarFechaEjecucion(event) {
    const popover = await this.popoverController.create({
      component: CustomInputComponent,
      componentProps: {
        formGruop: this.cronogramaForm,
        label: "Fecha Eejcucion",
        name: "FechaEjecucion",
        type: "datetime",
        form: "form",
        defaultValue: Date(),
      },
      event: event,
      mode: "ios",
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log("Padre", info);
    this.fechaEjecucion =this.datepipe.transform(info.data.item, 'dd/MM/yyyy');
  }

  async mostrarFechaFin(event) {
    const popover = await this.popoverController.create({
      component: CustomInputComponent,
      componentProps: {
        formGruop: this.cronogramaForm,
        label: "Fecha Eejcucion",
        name: "FechaEjecucion",
        type: "datetime",
        form: "form",
        defaultValue: Date(),
      },
      event: event,
      mode: "ios",
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log("Padre", info);
    this.fechaFin =this.datepipe.transform(info.data.item, 'dd/MM/yyyy');
  }
  

}
