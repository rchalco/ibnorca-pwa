import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import {
  ModalController,
  PopoverController,
  ToastController,
} from "@ionic/angular";
import { CustomInputComponent } from "src/app/components/custom-input/custom-input.component";
import { MesesComponent } from "src/app/components/meses/meses.component";
import { TcpListProductsComponent } from "src/app/components/tcp-list-products/tcp-list-products.component";
import { ProductList } from "src/app/interfaces/apertura_auditoria/product_list";
import { DatePipe } from "@angular/common";
import { ProductDetailComponent } from "src/app/components/product-detail/product-detail.component";
import { SystemList } from "src/app/interfaces/apertura_auditoria/system_list";
import { AperturaAuditoriaService } from "src/app/services/apertura-auditoria.service";
import { Praprogramasdeauditorium } from "src/app/interfaces/apertura_auditoria/Praprogramasdeauditorium";
import { Cliente } from "src/app/interfaces/General/Cliente";
import { DatosServicio } from "src/app/interfaces/apertura_auditoria/IBDatosServicio";
import { Cargo } from "src/app/interfaces/apertura_auditoria/cargo";

@Component({
  selector: "app-programa-auditoria",
  templateUrl: "./programa-auditoria.page.html",
  styleUrls: ["./programa-auditoria.page.scss"],
})
export class ProgramaAuditoriaPage implements OnInit {
  //currentIdService = 14455;//TCO
  currentIdService = 5915;  //TCS
  currentPraprogramasdeauditorium: Praprogramasdeauditorium;
  currentDatosServicio: DatosServicio;
  currentCliente: Cliente;
  mode = "TCS";

  constructor(
    public modalController: ModalController,
    public formBuilder: FormBuilder,
    private popoverController: PopoverController,
    public datepipe: DatePipe,
    private aperturaAuditoriaService: AperturaAuditoriaService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    ///TDO : convocacmos al servicio para obtner la informacion globla de los servicios TCS TCP
    this.aperturaAuditoriaService
      .ObtenerProgramaAuditoria(this.currentIdService)
      .subscribe((resul) => {
        console.log(resul);
        if (resul.state === 1) {
          this.currentPraprogramasdeauditorium = resul.object;
          this.currentCliente = JSON.parse(resul.object.organizacionContentWs);
          this.currentDatosServicio = JSON.parse(
            resul.object.detalleServicioWs
          );

          this.currentPraprogramasdeauditorium.praciclosprogauditoria.forEach(
            (x) => {
              //copiamos los estaodos del ciclo al cronoramoa
              x.praciclocronogramas[0].estado = x.estadoDescripcion;
              //deseralizamos los cargos
              if (x.pracicloparticipantes) {
                x.pracicloparticipantes.forEach((yy) => {
                  yy._cargo = JSON.parse(yy.cargoDetalleWs);
                  if (yy._cargo["cod_tipoauditor"]) {
                    yy._cargo.idCargoPuesto = yy._cargo["cod_tipoauditor"];
                    yy._cargo.cargoPuesto = yy._cargo["descripcion"];
                  }
                  if (yy.participanteDetalleWs) {
                    yy._personal = JSON.parse(yy.participanteDetalleWs);
                  }
                });
              }
            }
          );

          this.mode = this.currentDatosServicio.area;
        } else {
          this.presentToast(
            "No se puede rescartar la informacion: " + resul.message
          );
        }
      });
  }

  async mostrarSitios() {
    console.log("llamando a mostrar sitios");
  }

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: "top",
      color: "danger",
    });
    toast.present();
  }
}
