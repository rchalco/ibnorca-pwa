import { Personal } from "./../interfaces/apertura_auditoria/personal";
import { ResponseQuery } from "./../interfaces/wraper/ResponseQuery";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HEADERS_SERVICE, URL_APERTURA } from "src/environments/environment";
import { Praprogramasdeauditorium } from "../interfaces/apertura_auditoria/Praprogramasdeauditorium";
import { BaseService } from "./baseService";
import { DatabaseService } from "./database.service";
import { usuario } from "../interfaces/seguridad/usuario";
import { ResponseObject } from "../interfaces/wraper/ResponseObject";
import { CargoItem } from "../interfaces/apertura_auditoria/cargo_item";
import { Norma } from "../interfaces/apertura_auditoria/Norma";
import { Pais } from "../interfaces/General/Pais";
import { Estado } from "../interfaces/General/Estado";
import { Ciudad } from "../interfaces/General/Ciudad";
import { LoadingController, ToastController } from "@ionic/angular";
import { of } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { Clasificador } from "../interfaces/General/Clasificador";

const headers = HEADERS_SERVICE;
const url_apertura = URL_APERTURA;
@Injectable({
  providedIn: "root",
})
export class AperturaAuditoriaService extends BaseService {
  constructor(
    public databaseService: DatabaseService,
    public httpClient: HttpClient,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) {
    super(databaseService, httpClient, loadingController, toastController);
  }

  ObtenerProgramaAuditoria(IdServicio) {
    let url_query = url_apertura + "ObtenerProgramaAuditoria";
    let dataRequest = {
      IdServicio: IdServicio,
      Usuario: usuario.currentUser.nick,
    };
    this.presentLoader();
    return this.httpClient
      .post<ResponseObject<Praprogramasdeauditorium>>(
        url_query,
        JSON.stringify(dataRequest),
        { headers }
      )
      .pipe(
        finalize(() => {
          console.log("**se termino la llamada ObtenerProgramaAuditoria");
          this.dismissLoader();
        })
      );
  }

  ObtenerCargos() {
    let url_query = url_apertura + "ObtenerCargos";
    let dataRequest = {};

    this.presentLoader();
    return this.httpClient.post<ResponseQuery<CargoItem>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    ).pipe(
      finalize(() => {
        console.log("se termino la llamada ObtenerCargos");
        this.dismissLoader();
      })
    );
  }

  ObtenerParticipanteXCargos(IdCargoCalificado) {
    let url_query = url_apertura + "BuscarPersonalCargos";
    let dataRequest = {
      IdCargoCalificado: IdCargoCalificado,
    };

    this.presentLoader();
    return this.httpClient.post<ResponseQuery<Personal>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    ).pipe(
      finalize(() => {
        console.log("se termino la llamada");
        this.dismissLoader();
      })
    );
  }

  BuscarNormas(Codigo) {
    let url_query = url_apertura + "BuscarNormas";
    let dataRequest = {
      Codigo: Codigo,
    };

    this.presentLoader();
    return this.httpClient.post<ResponseQuery<Norma>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    ).pipe(
      finalize(() => {
        console.log("se termino la llamada BuscarNormas");
        this.dismissLoader();
      })
    );
  }

  BuscarNormasInternacionales(Codigo) {
    let url_query = url_apertura + "BuscarNormasInternacionales";
    let dataRequest = {
      Codigo: Codigo,
    };

    this.presentLoader();
    return this.httpClient.post<ResponseQuery<Norma>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    ).pipe(
      finalize(() => {
        console.log("se termino la llamada BuscarNormasInternacionales");
        this.dismissLoader();
      })
    );
  }

  BuscarPais(pais) {
    let url_query = url_apertura + "BuscarPais";
    let dataRequest = {
      pais: pais,
    };

    this.presentLoader();
    return this.httpClient.post<ResponseQuery<Pais>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    ).pipe(
      finalize(() => {
        console.log("se termino la llamada BuscarPais");
        this.dismissLoader();
      })
    );
  }

  BuscarEstado(IdPais) {
    let url_query = url_apertura + "BuscarEstado";
    let dataRequest = {
      IdPais: IdPais,
    };

    this.presentLoader();
    return this.httpClient.post<ResponseQuery<Estado>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    ).pipe(
      finalize(() => {
        console.log("se termino la llamada BuscarEstado");
        this.dismissLoader();
      })
    );
  }

  BuscarCiudad(IdEstado) {
    let url_query = url_apertura + "BuscarCiudad";
    let dataRequest = {
      IdEstado: IdEstado,
    };

    this.presentLoader();
     return this.httpClient.post<ResponseQuery<Ciudad>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    ).pipe(
      finalize(() => {
        console.log("se termino la llamada BuscarCiudad");
        this.dismissLoader();
      })
    );
  }

  RegisterProgramaAuditoria(programa) {
    let url_query = url_apertura + "RegisterProgramaAuditoria";
   
    this.presentLoader();   
    return this.httpClient.post<ResponseObject<Praprogramasdeauditorium>>(
      url_query,
      JSON.stringify(programa),
      { headers }
    ).pipe(
      finalize(() => {
        console.log("se termino la llamada RegisterProgramaAuditoria");
        this.dismissLoader();
      })
    );
  }

  GenerarDesignacion(IdCiclo, Plantilla) {
    let url_query = url_apertura + "GenerarDesignacion";
    let dataRequest = {
      IdCiclo: IdCiclo,
      pathPlantilla: Plantilla,
    };
    this.presentLoader();
    return this.httpClient
      .post<ResponseQuery<Ciudad>>(url_query, JSON.stringify(dataRequest), {
        headers,
      })
      .pipe(
        finalize(() => {
          console.log("se termino la llamada GenerarDesignacion");
          this.dismissLoader();
        })
      );
  }

  ObtenerArchivoDesignacion(fileName) {
    let url_query =
      url_apertura + "ObtenerArchivoDesignacion?fileName=" + fileName;

    this.httpClient
      .get(url_query, {
        responseType: "arraybuffer",
        headers: headers,
      })
      //.subscribe((response) => this.downLoadFile(response, "application/pdf"));
      .subscribe((response) => this.downLoadFileWord(response, "Desginacion.doc"));
  }

  downLoadFile(data: any, type: string) {
    
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    let pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == "undefined") {
      alert(
        "Por favor deshabilite los bloqueadores de descarga para continuar."
      );
    }
  }

  downLoadFileWord(data: any, fileName: string) {
    
    var blob = new Blob([data], { type: 'application/octet-stream' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    // set the name of the file
    link.download = fileName;
    // clicking the anchor element will download the file
    link.click();
  }

  BuscarOrganismosCertificadores() {
    let url_query = url_apertura + "BuscarOrganismosCertificadores";
    let dataRequest = {
    };
    this.presentLoader();
    return this.httpClient
      .post<ResponseQuery<Clasificador>>(url_query, JSON.stringify(dataRequest), {
        headers,
      })
      .pipe(
        finalize(() => {
          console.log("se termino la llamada GenerarDesignacion");
          this.dismissLoader();
        })
      );
  }

}
