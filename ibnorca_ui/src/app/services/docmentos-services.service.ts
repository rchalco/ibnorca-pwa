/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { HEADERS_SERVICE, URL_ELABORACION } from 'src/environments/environment';
import { CustomResponse } from '../interfaces/wraper/CustomResponse';
import { ResponseQuery } from '../interfaces/wraper/ResponseQuery';
import { BaseService } from './baseService';
import { DatabaseService } from './database.service';
const headers = HEADERS_SERVICE;


@Injectable({
  providedIn: 'root',
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
    const url_query = URL_ELABORACION + 'GenerarDocumento';
    const dataRequest = {
      idCicloAuditoria: IdCiclo,
      nombrePlantilla: Plantilla,
    };
    this.presentLoader();
    this.httpClient
      .post<CustomResponse>(url_query, JSON.stringify(dataRequest), {
        headers,
      })
      .pipe(
        finalize(() => {
          console.log('se termino la llamada GenerarDocumento');
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError('No se tiene comunicacion con el servidor');
          return Observable.throw(new Error(error.status));
        })
      )
      .subscribe((x) => {
        if (x.state !== 1) {
          this.showMessageError('Error en la plantilla: ' + x.message);
          return;
        }
        this.ObtenerArchivo(x.message, Plantilla);
      });
  }

  ObtenerArchivo(fileName, nombrePlantilla) {
    const url_query = URL_ELABORACION + 'ObtenerArchivo?fileName=' + fileName;

    this.httpClient
      .get(url_query, {
        responseType: 'arraybuffer',
        headers: HEADERS_SERVICE,
      })
      //.subscribe((response) => this.downLoadFile(response, "application/pdf"));
      .subscribe((response) =>
        this.downLoadFileWord(response, nombrePlantilla + '.doc')
      );
  }

  downLoadFile(data: any, _type: string) {
    const blob = new Blob([data], { type: _type });
    const url = window.URL.createObjectURL(blob);
    const pwa = window.open(url);
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert(
        'Por favor deshabilite los bloqueadores de descarga para continuar.'
      );
    }
  }

  downLoadFileWord(data: any, fileName: string) {
    const blob = new Blob([data], { type: 'application/octet-stream' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  }
}
