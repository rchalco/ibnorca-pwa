/* eslint-disable @typescript-eslint/naming-convention */
import { Personal } from './../interfaces/apertura_auditoria/personal';
import { ResponseQuery } from './../interfaces/wraper/ResponseQuery';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HEADERS_FILE,
  HEADERS_SERVICE,
  URL_APERTURA,
} from 'src/environments/environment';
import { Praprogramasdeauditorium } from '../interfaces/apertura_auditoria/Praprogramasdeauditorium';
import { BaseService } from './baseService';
import { DatabaseService } from './database.service';
import { usuario } from '../interfaces/seguridad/usuario';
import { ResponseObject } from '../interfaces/wraper/ResponseObject';
import { CargoItem } from '../interfaces/apertura_auditoria/cargo_item';
import { Norma } from '../interfaces/apertura_auditoria/Norma';
import { Pais } from '../interfaces/General/Pais';
import { Estado } from '../interfaces/General/Estado';
import { Ciudad } from '../interfaces/General/Ciudad';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Clasificador } from '../interfaces/General/Clasificador';
import { CustomResponse } from '../interfaces/wraper/ResponseObject copy';

const headers = HEADERS_SERVICE;


@Injectable({
  providedIn: 'root',
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

  ObtenerProgramaAuditoria(pidServicio) {
    const urlQuery = URL_APERTURA + 'ObtenerProgramaAuditoria';
    const dataRequest = {
      idServicio: pidServicio,
      usuario: usuario.currentUser.nick,
    };
    this.presentLoader();
    return this.httpClient
      .post<any>(
        urlQuery,
        JSON.stringify(dataRequest),
        { headers }
      )
      .pipe(
        finalize(() => {
          console.log('**se termino la llamada ObtenerProgramaAuditoria');
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError('No se tiene comunicacion con el servidor');
          return Observable.throw(new Error(error.status));
        })
      );
  }

  ObtenerCargos() {
    const url_query = URL_APERTURA + 'ObtenerCargos';
    const dataRequest = {};

    this.presentLoader();
    return this.httpClient
      .post<ResponseQuery<CargoItem>>(url_query, JSON.stringify(dataRequest), {
        headers,
      })
      .pipe(
        finalize(() => {
          console.log('se termino la llamada ObtenerCargos');
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError('No se tiene comunicacion con el servidor');
          return Observable.throw(new Error(error.status));
        })
      );
  }

  ObtenerParticipanteXCargos(IdCargoCalificado) {
    const url_query = URL_APERTURA + 'BuscarPersonalCargos';
    const dataRequest = {
      IdCargoCalificado,
    };

    this.presentLoader();
    return this.httpClient
      .post<ResponseQuery<Personal>>(url_query, JSON.stringify(dataRequest), {
        headers,
      })
      .pipe(
        finalize(() => {
          console.log('se termino la llamada');
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError('No se tiene comunicacion con el servidor');
          return Observable.throw(new Error(error.status));
        })
      );
  }

  BuscarNormas(Codigo) {
    const url_query = URL_APERTURA + 'BuscarNormas';
    const dataRequest = {
      Codigo,
    };

    this.presentLoader();
    return this.httpClient
      .post<ResponseQuery<Norma>>(url_query, JSON.stringify(dataRequest), {
        headers,
      })
      .pipe(
        finalize(() => {
          console.log('se termino la llamada BuscarNormas');
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError('No se tiene comunicacion con el servidor');
          return Observable.throw(new Error(error.status));
        })
      );
  }

  BuscarNormasInternacionales(Codigo) {
    const url_query = URL_APERTURA + 'BuscarNormasInternacionales';
    const dataRequest = {
      Codigo,
    };

    this.presentLoader();
    return this.httpClient
      .post<ResponseQuery<Norma>>(url_query, JSON.stringify(dataRequest), {
        headers,
      })
      .pipe(
        finalize(() => {
          console.log('se termino la llamada BuscarNormasInternacionales');
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError('No se tiene comunicacion con el servidor');
          return Observable.throw(new Error(error.status));
        })
      );
  }

  BuscarPais(pais) {
    const url_query = URL_APERTURA + 'BuscarPais';
    const dataRequest = {
      pais,
    };

    this.presentLoader();
    return this.httpClient
      .post<ResponseQuery<Pais>>(url_query, JSON.stringify(dataRequest), {
        headers,
      })
      .pipe(
        finalize(() => {
          console.log('se termino la llamada BuscarPais');
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError('No se tiene comunicacion con el servidor');
          return Observable.throw(new Error(error.status));
        })
      );
  }

  BuscarEstado(IdPais) {
    const url_query = URL_APERTURA + 'BuscarEstado';
    const dataRequest = {
      IdPais,
    };

    this.presentLoader();
    return this.httpClient
      .post<ResponseQuery<Estado>>(url_query, JSON.stringify(dataRequest), {
        headers,
      })
      .pipe(
        finalize(() => {
          console.log('se termino la llamada BuscarEstado');
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError('No se tiene comunicacion con el servidor');
          return Observable.throw(new Error(error.status));
        })
      );
  }

  BuscarCiudad(IdEstado) {
    const url_query = URL_APERTURA + 'BuscarCiudad';
    const dataRequest = {
      IdEstado,
    };

    this.presentLoader();
    return this.httpClient
      .post<ResponseQuery<Ciudad>>(url_query, JSON.stringify(dataRequest), {
        headers,
      })
      .pipe(
        finalize(() => {
          console.log('se termino la llamada BuscarCiudad');
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError('No se tiene comunicacion con el servidor');
          return Observable.throw(new Error(error.status));
        })
      );
  }

  RegisterProgramaAuditoria(programa) {
    const url_query = URL_APERTURA + 'RegisterProgramaAuditoria';

    this.presentLoader();
    return this.httpClient
      .post<any>(
        url_query,
        JSON.stringify(programa),
        { headers }
      )
      .pipe(
        finalize(() => {
          console.log('se termino la llamada RegisterProgramaAuditoria');
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError('No se tiene comunicacion con el servidor');
          return Observable.throw(new Error(error.status));
        })
      );
  }

  GenerarDesignacion(IdCiclo, Plantilla) {
    const url_query = URL_APERTURA + 'GenerarDesignacion';
    const dataRequest = {
      IdCiclo,
      pathPlantilla: Plantilla,
    };
    this.presentLoader();
    return this.httpClient
      .post<ResponseQuery<Ciudad>>(url_query, JSON.stringify(dataRequest), {
        headers,
      })
      .pipe(
        finalize(() => {
          console.log('se termino la llamada GenerarDesignacion');
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError('No se tiene comunicacion con el servidor');
          return Observable.throw(new Error(error.status));
        })
      );
  }

  ObtenerArchivoDesignacion(fileName) {
    const url_query =
      URL_APERTURA + 'ObtenerArchivoDesignacion?fileName=' + fileName;

    this.httpClient
      .get(url_query, {
        responseType: 'arraybuffer',
        headers,
      })
      //.subscribe((response) => this.downLoadFile(response, "application/pdf"));
      .subscribe((response) =>
        this.downLoadFileWord(response, 'Desginacion.doc')
      );
  }

  downLoadFile(data: any, type: string) {
    const blob = new Blob([data], { type });
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
    // set the name of the file
    link.download = fileName;
    // clicking the anchor element will download the file
    link.click();
  }

  BuscarOrganismosCertificadores() {
    const url_query = URL_APERTURA + 'BuscarOrganismosCertificadores';
    const dataRequest = {};
    this.presentLoader();
    return this.httpClient
      .post<ResponseQuery<Clasificador>>(
        url_query,
        JSON.stringify(dataRequest),
        {
          headers,
        }
      )
      .pipe(
        finalize(() => {
          console.log('se termino la llamada GenerarDesignacion');
          this.dismissLoader();
        })
      );
  }

  CargarSolicitud(fileToUpload) {
    const urlQuery = URL_APERTURA + 'CargarSolcitud';
    this.presentLoader();
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient.post<CustomResponse>(urlQuery, formData).pipe(
      finalize(() => {
        console.log('se termino la llamada CargarSolicitud');
        this.dismissLoader();
      }),
      catchError((error) => {
        console.error(error);
        this.showMessageError('Error al cargar el archivo ' + error.error);
        return Observable.throw(new Error(error.status));
      })
    );
  }
}
