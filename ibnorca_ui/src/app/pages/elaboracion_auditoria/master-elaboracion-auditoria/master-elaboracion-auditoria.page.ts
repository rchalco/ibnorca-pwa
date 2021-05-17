import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Personal } from "src/app/interfaces/apertura_auditoria/personal";
import { Pracicloparticipante } from "src/app/interfaces/apertura_auditoria/Praprogramasdeauditorium";
import {
  Elacontenidoauditorium,
  Elacronogama,
  Elahallazgo,
  PlanAuditoriaDTO,
} from "src/app/interfaces/elaboracion_auditoria/PlanAuditoriaDTO";
import { ElaboracionAuditoriaService } from "src/app/services/elaboracion-auditoria.service";

@Component({
  selector: "app-master-elaboracion-auditoria",
  templateUrl: "./master-elaboracion-auditoria.page.html",
  styleUrls: ["./master-elaboracion-auditoria.page.scss"],
})
export class MasterElaboracionAuditoriaPage implements OnInit {
  select_component = "plan_auditoria";
  idCicloAuditoria = 0;
  currentPlanAuditoriaDTO: PlanAuditoriaDTO;
  currentPlanMuestreo: Elacontenidoauditorium;
  listaDirecciones: string[] = [];

  area = "";
  proceso = "ELABORACION";
  constructor(
    private route: ActivatedRoute,
    private elaboracionAuditoriaService: ElaboracionAuditoriaService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      console.log(params);
      if (params.idCicloAuditoria) {
        this.idCicloAuditoria = params.idCicloAuditoria;
        console.log("Id de ciclo", this.idCicloAuditoria);

        this.elaboracionAuditoriaService
          .ObtenerPlanAuditoria(this.idCicloAuditoria)
          .subscribe((x) => {
            console.log("resul service master", x);
            this.currentPlanAuditoriaDTO = x.object;
            this.cargarObjetosAuxiliares();
            if (x.state != 1) {
              this.elaboracionAuditoriaService.showMessageError(x.message);
            } else {
              console.log(this.currentPlanAuditoriaDTO.pracicloparticipante);
              this.area = this.currentPlanAuditoriaDTO.area;
            }
          });
      } else {
        this.elaboracionAuditoriaService.showMessageError(
          "No se recibio ningun parametro de Id de Ciclo de auditoria"
        );
      }
    });
  }

  cargarObjetosAuxiliares() {
    this.currentPlanAuditoriaDTO["listaParticipantes"] = new Array<Personal>();
    //se asgina el check de seleccionado a la auditoria
    this.currentPlanAuditoriaDTO.elaauditorium.elacontenidoauditoria?.forEach(
      (contenido) => {
        if (contenido.seleccionado === 1) {
          contenido["select"] = true;
        }
      }
    );

    //asignamos los objetos de cargos y participantes
    this.currentPlanAuditoriaDTO.pracicloparticipante.forEach((yy) => {
      yy._cargo = JSON.parse(yy.cargoDetalleWs);
      if (yy._cargo["cod_tipoauditor"]) {
        yy._cargo.idCargoPuesto = yy._cargo["cod_tipoauditor"];
        yy._cargo.cargoPuesto = yy._cargo["descripcion"];
      }
      if (yy.participanteDetalleWs) {
        yy._personal = JSON.parse(yy.participanteDetalleWs);
        this.currentPlanAuditoriaDTO["listaParticipantes"].push(yy._personal);
      }
    });

    //asignamos a las listas de crongramas a los sistemas y productos
    this.currentPlanAuditoriaDTO.pradireccionespaproducto?.forEach((x) => {
      x[
        "listaCronograma"
      ] = this.currentPlanAuditoriaDTO.elaauditorium.elacronogamas.filter(
        (cronograma) =>
          cronograma.idDireccionPaproducto === x.idDireccionPaproducto
      );
    });

    this.currentPlanAuditoriaDTO.pradireccionespasistema?.forEach((x) => {
      x[
        "listaCronograma"
      ] = this.currentPlanAuditoriaDTO.elaauditorium.elacronogamas.filter(
        (cronograma) =>
          cronograma.idDireccionPasistema === x.idDireccionPasistema
      );
    });

    this.currentPlanAuditoriaDTO.pradireccionespaproducto.forEach(x => {
      if (this.listaDirecciones.indexOf(x.direccion) === -1) {
        this.listaDirecciones.push(x.direccion);
      }
    });

    this.currentPlanAuditoriaDTO.pradireccionespasistema.forEach(x => {
      if (x.dias > 0 && this.listaDirecciones.indexOf(x.direccion) === -1) {
        this.listaDirecciones.push(x.direccion);
      }
    });
  }

  guardarCronograma(event) {
    console.log("llego al lista de crongrma", event);
    if (!this.currentPlanAuditoriaDTO.elaauditorium.elacronogamas) {
      this.currentPlanAuditoriaDTO.elaauditorium.elacronogamas = new Array<Elacronogama>();
      this.currentPlanAuditoriaDTO.elaauditorium.elacronogamas = this.currentPlanAuditoriaDTO.elaauditorium.elacronogamas.concat(
        event
      );
    } else {
      //modificamos o adicionamos
      event.forEach((element) => {
        let indexFindElement = this.currentPlanAuditoriaDTO.elaauditorium.elacronogamas.findIndex(
          (x) => x.idElAcronograma === element.idElAcronograma
        );
        if (indexFindElement >= 0) {
          this.currentPlanAuditoriaDTO.elaauditorium.elacronogamas[
            indexFindElement
          ] = element;
        } else {
          this.currentPlanAuditoriaDTO.elaauditorium.elacronogamas.push(
            element
          );
        }
      });
    }
    console.log("antes de enviar al registro", this.currentPlanAuditoriaDTO);
    this.elaboracionAuditoriaService
      .RegistrarPlanAuditoria(this.currentPlanAuditoriaDTO)
      .subscribe((x) => {
        console.log("resul  RegistrarPlanAuditoria", x);
        this.elaboracionAuditoriaService.showMessageResponse(x);
      });
  }

  eliminarElmentCronograma(pIdElaCronograma) {
    console.log("eleminar cronograma id:", pIdElaCronograma);
    let indexFindElement = this.currentPlanAuditoriaDTO.elaauditorium.elacronogamas.findIndex(
      (x) => x.idElAcronograma === pIdElaCronograma
    );
    if (indexFindElement >= 0) {
      this.currentPlanAuditoriaDTO.elaauditorium.elacronogamas.splice(
        indexFindElement,
        1
      );
      this.elaboracionAuditoriaService
        .RegistrarPlanAuditoria(this.currentPlanAuditoriaDTO)
        .subscribe((x) => {
          console.log("resul  RegistrarPlanAuditoria", x);
          this.elaboracionAuditoriaService.showMessageResponse(x);
        });
    }
  }

  guardarHallazgo(event) {
    this.currentPlanAuditoriaDTO.elaauditorium.elahallazgos = event;
    this.elaboracionAuditoriaService
      .RegistrarPlanAuditoria(this.currentPlanAuditoriaDTO)
      .subscribe((x) => {
        if (x.state === 1) {
          this.currentPlanAuditoriaDTO = x.object;
          this.cargarObjetosAuxiliares();
        }
        this.elaboracionAuditoriaService.showMessageResponse(x);
      });
  }

  guardarAdp(event) {
    this.currentPlanAuditoriaDTO.elaauditorium.elaadps = event;
    console.log("guardamos adp", this.currentPlanAuditoriaDTO);
    this.elaboracionAuditoriaService
      .RegistrarPlanAuditoria(this.currentPlanAuditoriaDTO)
      .subscribe((x) => {
        if (x.state === 1) {
          this.currentPlanAuditoriaDTO = x.object;
          this.cargarObjetosAuxiliares();
        }
        this.elaboracionAuditoriaService.showMessageResponse(x);
      });
  }

  guardarContenido(event) {
    this.currentPlanAuditoriaDTO.elaauditorium.elacontenidoauditoria = event;
    console.log("guardamos contenido", this.currentPlanAuditoriaDTO);
    this.elaboracionAuditoriaService
      .RegistrarPlanAuditoria(this.currentPlanAuditoriaDTO)
      .subscribe((x) => {
        if (x.state === 1) {
          this.currentPlanAuditoriaDTO = x.object;
          this.cargarObjetosAuxiliares();
        }
        this.elaboracionAuditoriaService.showMessageResponse(x);
      });
  }

  guardarPlanMuestreo(event) {

    this.currentPlanAuditoriaDTO.elaauditorium.elacontenidoauditoria = event;
    this.elaboracionAuditoriaService
      .RegistrarPlanAuditoria(this.currentPlanAuditoriaDTO)
      .subscribe((x) => {
        if (x.state === 1) {
          this.currentPlanAuditoriaDTO = x.object;
          this.cargarObjetosAuxiliares();
        }
        this.elaboracionAuditoriaService.showMessageResponse(x);
      });
  }

  segmentChanged(event) {
    this.select_component = event.detail.value;
  }

}
