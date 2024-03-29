/* eslint-disable no-underscore-dangle */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  ModalController,
  PopoverController,
  ToastController,
} from '@ionic/angular';
import { CustomInputComponent } from 'src/app/components/custom-input/custom-input.component';
import { MesesComponent } from 'src/app/components/meses/meses.component';
import { TcpListProductsComponent } from 'src/app/components/tcp-list-products/tcp-list-products.component';
import { ProductList } from 'src/app/interfaces/apertura_auditoria/product_list';
import { DatePipe } from '@angular/common';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';
import { SystemList } from 'src/app/interfaces/apertura_auditoria/system_list';
import { AperturaAuditoriaService } from 'src/app/services/apertura-auditoria.service';
import {
  Praciclosprogauditorium,
  Praprogramasdeauditorium,
} from 'src/app/interfaces/apertura_auditoria/Praprogramasdeauditorium';
import { Cliente } from 'src/app/interfaces/General/Cliente';
import { DatosServicio } from 'src/app/interfaces/apertura_auditoria/IBDatosServicio';
import { Cargo } from 'src/app/interfaces/apertura_auditoria/cargo';
import { ParamOrganismosCertificadoresComponent } from 'src/app/components/param-organismos-certificadores/param-organismos-certificadores.component';
import { ActivatedRoute } from '@angular/router';
import { DocmentosServicesService } from 'src/app/services/docmentos-services.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-programa-auditoria',
  templateUrl: './programa-auditoria.page.html',
  styleUrls: ['./programa-auditoria.page.scss'],
})
export class ProgramaAuditoriaPage implements OnInit {
  //currentIdService = 14455; //TCP
  //currentIdService = 5915;  //TCS
  currentIdService;
  currentPraprogramasdeauditorium: Praprogramasdeauditorium;
  currentDatosServicio: DatosServicio;
  currentCliente: Cliente;
  mode = 'TCS';
  programaForm: FormGroup;
  ciclosVisbles = {};

  constructor(
    public modalController: ModalController,
    public formBuilder: FormBuilder,
    private popoverController: PopoverController,
    public datepipe: DatePipe,
    private aperturaAuditoriaService: AperturaAuditoriaService,
    private route: ActivatedRoute,
    private docmentosServicesService: DocmentosServicesService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params.currentIdService) {
        this.currentIdService = params.currentIdService;
        console.log('Id servicio', this.currentIdService);
        ///TDO : convocacmos al servicio para obtner la informacion globla de los servicios TCS TCP
        this.aperturaAuditoriaService
          .ObtenerProgramaAuditoria(this.currentIdService)
          .subscribe((resul) => {
            console.log(resul);
            if (resul.state === 1) {
              this.currentPraprogramasdeauditorium = resul.object;
              this.currentCliente = JSON.parse(
                resul.object.organizacionContentWs
              );
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
                      if (yy._cargo['cod_tipoauditor']) {
                        yy._cargo.idCargoPuesto = yy._cargo['cod_tipoauditor'];
                        yy._cargo.cargoPuesto = yy._cargo['descripcion'];
                      }
                      if (yy.participanteDetalleWs) {
                        yy._personal = JSON.parse(yy.participanteDetalleWs);
                      }
                    });
                  }
                }
              );

              if (
                this.currentPraprogramasdeauditorium.praciclosprogauditoria
                  .length > 0
              ) {
                this.ciclosVisbles[
                  this.currentPraprogramasdeauditorium.praciclosprogauditoria[0].idPrAcicloProgAuditoria
                ] = true;
              }

              this.mode = this.currentDatosServicio.area;
            } else {
              this.aperturaAuditoriaService.showMessageResponse(resul);
            }
          });
      } else {
        this.aperturaAuditoriaService.showMessageError(
          'No se recibio ningun parametro de Id de servicio de auditoria'
        );
      }
    });

    this.programaForm = this.formBuilder.group({});
  }

  async mostrarSitios() {
    console.log('llamando a mostrar sitios');
  }

  async editarCiclo(ciclo, index) {
    console.log('editamos ciclo', ciclo);
    const popover = await this.popoverController.create({
      component: CustomInputComponent,
      componentProps: {
        formGruop: this.programaForm,
        label: 'Referencia',
        name: 'referencia',
        type: 'text',
        form: 'form',
        defaultValue: ciclo.referencia,
      },
      mode: 'ios',
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log('Padre', info);
    ciclo.referencia = info.data.item;
  }

  guardarPrograma() {
    this.aperturaAuditoriaService
      .RegisterProgramaAuditoria(this.currentPraprogramasdeauditorium)
      .subscribe((x) => {
        this.aperturaAuditoriaService.showMessageResponse(x);
        if (x.state === 1) {
          // eslint-disable-next-line @typescript-eslint/no-shadow
          x.object.praciclosprogauditoria.forEach((x) => {
            //copiamos los estaodos del ciclo al cronoramoa
            x.praciclocronogramas[0].estado = x.estadoDescripcion;
            //deseralizamos los cargos
            if (x.pracicloparticipantes) {
              x.pracicloparticipantes.forEach((yy) => {
                yy._cargo = JSON.parse(yy.cargoDetalleWs);
                if (yy._cargo.cod_tipoauditor) {
                  yy._cargo.idCargoPuesto = yy._cargo.cod_tipoauditor;
                  yy._cargo.cargoPuesto = yy._cargo.descripcion;
                }
                if (yy.participanteDetalleWs) {
                  yy._personal = JSON.parse(yy.participanteDetalleWs);
                }
              });
            }
          });
          this.currentPraprogramasdeauditorium = x.object;
          this.currentCliente = JSON.parse(x.object.organizacionContentWs);
          this.currentDatosServicio = JSON.parse(x.object.detalleServicioWs);
          this.mode = this.currentDatosServicio.area;
        }
      });
  }

  VerDesignacion(ciclo: Praciclosprogauditorium) {
    let nombrePlantilla =
      this.mode === 'TCS' ? 'REG-PRO-TCS-03-01' : 'REG-PRO-TCP-03-01';

    this.docmentosServicesService.GenerarDocumento(
      ciclo.idPrAcicloProgAuditoria,
      nombrePlantilla
    );
    /*this.aperturaAuditoriaService
      .GenerarDesignacion(
        ciclo.idPrAcicloProgAuditoria,
        "REG-PRO-TCS-03-01 Designación auditoria TCS Ver 1.0.doc"
      )
      .subscribe((x) => {
        console.log(x);
        //this.presentToast(x.message);
        this.aperturaAuditoriaService.ObtenerArchivoDesignacion(x.message);
      });*/
  }

  async mostrarOrganismo() {
    console.log('mostramos las organizaciones');
    const popover = await this.popoverController.create({
      component: ParamOrganismosCertificadoresComponent,
      componentProps: {
        defaultValue:
          this.currentPraprogramasdeauditorium.organismoCertificador,
      },
      event: event,
      mode: 'ios',
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log('Padre', info);
    this.currentPraprogramasdeauditorium.organismoCertificador = info.data.item;
  }

  segmentChanged(event) {
    this.currentPraprogramasdeauditorium.praciclosprogauditoria.forEach((x) => {
      this.ciclosVisbles[x.idPrAcicloProgAuditoria] = false;
    });
    this.ciclosVisbles[event.detail.value] = true;
  }
}
