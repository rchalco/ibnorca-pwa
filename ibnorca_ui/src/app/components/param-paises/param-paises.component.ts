import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Ciudad } from "src/app/interfaces/General/Ciudad";
import { Estado } from "src/app/interfaces/General/Estado";
import { Localizacion } from "src/app/interfaces/General/Localizacion";

import { Pais } from "src/app/interfaces/General/Pais";
import { AperturaAuditoriaService } from "src/app/services/apertura-auditoria.service";

@Component({
  selector: "app-param-paises",
  templateUrl: "./param-paises.component.html",
  styleUrls: ["./param-paises.component.scss"],
})
export class ParamPaisesComponent implements OnInit {
  @Input() defaulValue: string;
  listaPaises: Pais[];
  currentPais: Pais;
  listaEstados: Estado[];
  currentEstado: Estado;
  listaCiudades: Ciudad[];
  currentCiudad: Ciudad;
  currentLocalizacion: Localizacion = new Localizacion();
  @Output()
  public selectLocalizacionEmit: EventEmitter<Localizacion> = new EventEmitter<Localizacion>();

  constructor(private aperturaAuditoriaService: AperturaAuditoriaService) {}

  ngOnInit() {}

  buscarPais(event) {
    let codigoPais = event.detail.value;
    if (codigoPais.length > 3) {
      console.log("buscamos el pais");
      this.aperturaAuditoriaService.BuscarPais(codigoPais).subscribe((x) => {
        console.log(x);
        this.listaPaises = x.listEntities;
      });
    }
  }
  seleccionarPais(event) {
    console.log("seleccionar pais", event);
    this.buscarEstados((<Pais>event.detail.value).idPais);
  }

  buscarEstados(IdPais) {
    console.log("buscamos el estado");
    this.aperturaAuditoriaService.BuscarEstado(IdPais).subscribe((x) => {
      console.log(x);
      this.listaEstados = x.listEntities;
    });
  }
  seleccionarEstado(event) {
    console.log("Estado Seleccionado", event);
    this.buscarCiudad((<Estado>event.detail.value).idEstado);
  }

  buscarCiudad(iDEstado) {
    this.aperturaAuditoriaService.BuscarCiudad(iDEstado).subscribe((x) => {
      console.log(x);
      this.listaCiudades = x.listEntities;
    });
  }
  seleccionarCiudad(event) {
    this.currentCiudad = <Ciudad>event.detail.value;
    this.currentLocalizacion.ciudad = this.currentCiudad;
    this.currentLocalizacion.estado = this.currentEstado;
    this.currentLocalizacion.pais = this.currentPais;
    if (this.selectLocalizacionEmit) {
      this.selectLocalizacionEmit.emit(this.currentLocalizacion);
    }
  }
}
