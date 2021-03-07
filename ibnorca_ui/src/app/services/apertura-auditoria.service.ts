import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HEADERS_SERVICE, URL_APERTURA } from "src/environments/environment";
import { Praprogramasdeauditorium } from "../interfaces/apertura_auditoria/Praprogramasdeauditorium";
import { BaseService } from "./baseService";
import { DatabaseService } from "./database.service";
import { usuario } from "../interfaces/seguridad/usuario";
import { ResponseObject } from "../interfaces/wraper/ResponseObject";

const headers = HEADERS_SERVICE;
const url_apertura = URL_APERTURA;

@Injectable({
  providedIn: "root",
})
export class AperturaAuditoriaService implements BaseService {
  constructor(
    private databaseService: DatabaseService,
    private httpClient: HttpClient
  ) {}

  ObtenerProgramaAuditoria(IdServicio) {
    let url_query = url_apertura + "ObtenerProgramaAuditoria";
    let dataRequest = {
      pIdServicio: IdServicio,
      pUsuario: usuario.currentUser.nick,
    };

    return this.httpClient.post<ResponseObject<Praprogramasdeauditorium>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    );
  }
}
