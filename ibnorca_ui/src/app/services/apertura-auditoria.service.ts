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
import { NormaInternacional } from "../interfaces/apertura_auditoria/NormaInternacional";

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
      IdServicio: IdServicio,
      Usuario: usuario.currentUser.nick,
    };

    return this.httpClient.post<ResponseObject<Praprogramasdeauditorium>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    );
  }

  ObtenerCargos() {
    let url_query = url_apertura + "ObtenerCargos";
    let dataRequest = {};

    return this.httpClient.post<ResponseQuery<CargoItem>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    );
  }

  ObtenerParticipanteXCargos(IdCargoCalificado) {
    let url_query = url_apertura + "BuscarPersonalCargos";
    let dataRequest = {
      IdCargoCalificado: IdCargoCalificado,
    };

    return this.httpClient.post<ResponseQuery<Personal>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    );
  }

  BuscarNormas(Codigo) {
    let url_query = url_apertura + "BuscarNormas";
    let dataRequest = {
      Codigo: Codigo,
    };

    return this.httpClient.post<ResponseQuery<Norma>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    );
  }

  BuscarNormasInternacionales(Codigo) {
    let url_query = url_apertura + "BuscarNormasInternacionales";
    let dataRequest = {
      Codigo: Codigo,
    };

    return this.httpClient.post<ResponseQuery<Norma>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    );
  }

  BuscarPais(pais) {
    let url_query = url_apertura + "BuscarPais";
    let dataRequest = {
      pais: pais,
    };

    return this.httpClient.post<ResponseQuery<Pais>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    );
  }

  BuscarEstado(IdPais) {
    let url_query = url_apertura + "BuscarEstado";
    let dataRequest = {
      IdPais: IdPais,
    };

    return this.httpClient.post<ResponseQuery<Estado>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    );
  }

  BuscarCiudad(IdEstado) {
    let url_query = url_apertura + "BuscarCiudad";
    let dataRequest = {
      IdEstado: IdEstado,
    };

    return this.httpClient.post<ResponseQuery<Ciudad>>(
      url_query,
      JSON.stringify(dataRequest),
      { headers }
    );
  }

  RegisterProgramaAuditoria(programa){
    let url_query = url_apertura + "RegisterProgramaAuditoria";
    return this.httpClient.post<ResponseObject<Praprogramasdeauditorium>>(
      url_query,
      JSON.stringify(programa),
      { headers }
    );
  }
}
