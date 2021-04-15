import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoadingController, ToastController } from "@ionic/angular";
import { Observable } from "rxjs";
import { finalize } from "rxjs/internal/operators/finalize";
import { catchError } from "rxjs/operators";
import {
  HEADERS_SERVICE,
  URL_APERTURA,
  URL_ELABORACION,
} from "src/environments/environment";
import { Elalistaspredefinida } from "../interfaces/elaboracion_auditoria/Elalistaspredefinida";
import { Paramitemselect } from "../interfaces/elaboracion_auditoria/list-item-select";
import { PlanAuditoriaDTO } from "../interfaces/elaboracion_auditoria/PlanAuditoriaDTO";
import { ResumeCicloDTO } from "../interfaces/elaboracion_auditoria/ResumeCicloDTO";
import { Paramdocumento } from "../interfaces/General/Paramdocumento";
import { usuario } from "../interfaces/seguridad/usuario";
import { ResponseObject } from "../interfaces/wraper/ResponseObject";
import { ResponseQuery } from "../interfaces/wraper/ResponseQuery";
import { BaseService } from "./baseService";
import { DatabaseService } from "./database.service";
const headers = HEADERS_SERVICE;
const url_elaboracion = URL_ELABORACION;

@Injectable({
  providedIn: "root",
})
export class ElaboracionAuditoriaService extends BaseService {
  constructor(
    public databaseService: DatabaseService,
    public httpClient: HttpClient,
    public loadingController: LoadingController,
    public toastController: ToastController
  ) {
    super(databaseService, httpClient, loadingController, toastController);
  }

  ObtenerCiclosPorIdAuditor(IdAuditor) {
    let url_query = url_elaboracion + "ObtenerCiclosPorIdAuditor";
    let dataRequest = {
      IdAuditor: IdAuditor,
    };
    this.presentLoader();
    return this.httpClient
      .post<ResponseQuery<ResumeCicloDTO>>(
        url_query,
        JSON.stringify(dataRequest),
        { headers }
      )
      .pipe(
        finalize(() => {
          console.log("**se termino la llamada ObtenerCiclosPorIdAuditor");
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError("No se tiene comunicacion con el servidor");
          return Observable.throw(new Error(error.status));
        })
      );
  }

  ObtenerPlanAuditoria(IdCicloPrograma) {
    let url_query = url_elaboracion + "ObtenerPlanAuditoria";
    let dataRequest = {
      IdCicloPrograma: IdCicloPrograma,
      usuario: usuario.currentUser.nick,
    };
    this.presentLoader();
    return this.httpClient
      .post<ResponseObject<PlanAuditoriaDTO>>(
        url_query,
        JSON.stringify(dataRequest),
        { headers }
      )
      .pipe(
        finalize(() => {
          console.log("**se termino la llamada ObtenerCiclosPorIdAuditor");
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError("No se tiene comunicacion con el servidor");
          return Observable.throw(new Error(error.status));
        })
      );
  }

  RegistrarPlanAuditoria(planAuditoriaDTO){
    let url_query = url_elaboracion + "RegistrarPlanAuditoria";
    let dataRequest = planAuditoriaDTO;
    this.presentLoader();
    return this.httpClient
      .post<ResponseObject<PlanAuditoriaDTO>>(
        url_query,
        JSON.stringify(dataRequest),
        { headers }
      )
      .pipe(
        finalize(() => {
          console.log("**se termino la llamada RegistrarPlanAuditoria");
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError("No se tiene comunicacion con el servidor");
          return Observable.throw(new Error(error.status));
        })
      );
  }

  GetListasPredefinidas(area) {
    let url_query = url_elaboracion + "GetListasPredefinidas";
    let dataRequest = {
      area: area,
    };
    this.presentLoader();

    return this.httpClient
      .post<ResponseQuery<Elalistaspredefinida>>(
        url_query,
        JSON.stringify(dataRequest),
        { headers }
      )
      .pipe(
        finalize(() => {
          console.log("**se termino la llamada GetListasPredefinidas");
          this.dismissLoader();
        }),
        catchError((error) => {
          this.showMessageError("No se tiene comunicacion con el servidor");
          return Observable.throw(new Error(error.status));
        })
      );
  }

  GetListasVerificacion(IdLista) {
    let url_query = url_elaboracion + "GetListasVerificacion";
    let dataRequest = {
      IdLista: IdLista,
    };

    return this.httpClient.post<ResponseQuery<Paramitemselect>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    );
  }

  GetListasDocumetos(area, proceso) {
    let url_query = url_elaboracion + "GetListasDocumetos";
    let dataRequest = {
      area: area,
      proceso: proceso,
    };

    return this.httpClient.post<ResponseQuery<Paramdocumento>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    );
  }
}
