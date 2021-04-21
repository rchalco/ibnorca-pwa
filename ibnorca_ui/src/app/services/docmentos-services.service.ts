import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoadingController, ToastController } from "@ionic/angular";
import { Observable } from "rxjs";
import { catchError, finalize } from "rxjs/operators";
import { HEADERS_SERVICE, URL_ELABORACION } from "src/environments/environment";
import { ResponseQuery } from "../interfaces/wraper/ResponseQuery";
import { BaseService } from "./baseService";
import { DatabaseService } from "./database.service";
const headers = HEADERS_SERVICE;
const url_elaboracion = URL_ELABORACION;

@Injectable({
  providedIn: "root",
})
export class DocmentosServicesService extends BaseService {
  constructor(
    public databaseService: DatabaseService,
    public httpClient: HttpClient,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) {
    super(databaseService, httpClient, loadingController, toastController);
  }

  GenerarDocumento(IdCiclo, Plantilla) {
    let url_query = url_elaboracion + "GenerarDocumento";
    let dataRequest = {
      idCicloAuditoria: IdCiclo,
      nombrePlantilla: Plantilla,
    };
    this.presentLoader();
    this.httpClient
      .post<wraper.Response>(url_query, JSON.stringify(dataRequest), {
        headers,
      })
      .pipe(
        finalize(() => {
          console.log("se termino la llamada GenerarDocumento");
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError("No se tiene comunicacion con el servidor");
          return Observable.throw(new Error(error.status));
        })
      )
      .subscribe((x) => {
        if (x.state !== 1) {
          this.showMessageError("Error en la plantilla: " + x.message);
          return;
        }
        this.ObtenerArchivo(x.message, Plantilla);
      });
  }

  ObtenerArchivo(fileName, nombrePlantilla) {
    let url_query = url_elaboracion + "ObtenerArchivo?fileName=" + fileName;

    this.httpClient
      .get(url_query, {
        responseType: "arraybuffer",
        headers: headers,
      })
      //.subscribe((response) => this.downLoadFile(response, "application/pdf"));
      .subscribe((response) =>
        this.downLoadFileWord(response, nombrePlantilla + ".doc")
      );
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
    var blob = new Blob([data], { type: "application/octet-stream" });
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  }
}
