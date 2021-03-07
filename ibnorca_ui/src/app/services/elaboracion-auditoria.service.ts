import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HEADERS_SERVICE, URL_APERTURA, URL_ELABORACION } from "src/environments/environment";
import { Paramitemselect } from "../interfaces/elaboracion_auditoria/list-item-select";
import { ResponseQuery } from "../interfaces/wraper/ResponseQuery";
import { DatabaseService } from "./database.service";
const headers = HEADERS_SERVICE;
const url_elaboracion = URL_ELABORACION;

@Injectable({
  providedIn: "root",
})
export class ElaboracionAuditoriaService {
  constructor(
    private databaseService: DatabaseService,
    private httpClient: HttpClient
  ) {}

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
}
