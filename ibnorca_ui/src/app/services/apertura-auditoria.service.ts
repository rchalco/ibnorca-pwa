import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HEADERS_SERVICE, URL_APERTURA } from "src/environments/environment";
import { Praprogramasdeauditorium } from "../interfaces/apertura_auditoria/Praprogramasdeauditorium";
import { DatabaseService } from "./database.service";

const headers = HEADERS_SERVICE;
const url_apertura = URL_APERTURA;

@Injectable({
  providedIn: "root",
})
export class AperturaAuditoriaService {
  constructor(
    private databaseService: DatabaseService,
    private httpClient: HttpClient
  ) {}

  ObtenerProgramaAuditoria(IdServicio) {
    let url_query = url_apertura + "ObtenerProgramaAuditoria";
    //simple con cadena
    let data = '{ "IdServicios": ' + IdServicio + " }";
    //objeto complerjo
    let dataComplex: Praprogramasdeauditorium = new Praprogramasdeauditorium();
    //objeto al vuelo
    let dataSemicomplex = {
      IdServicios: IdServicio,
    };

    return this.httpClient.post<Praprogramasdeauditorium>(
      url_query,
      JSON.stringify(dataSemicomplex),
      { headers }
    );
  }
}
