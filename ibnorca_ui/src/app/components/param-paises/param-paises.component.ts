
import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output } from "@angular/core";
import { Estado } from "src/app/interfaces/General/Estado";

import { Pais } from 'src/app/interfaces/General/Pais';
import { AperturaAuditoriaService } from 'src/app/services/apertura-auditoria.service';

@Component({
  selector: 'app-param-paises',
  templateUrl: './param-paises.component.html',
  styleUrls: ['./param-paises.component.scss'],
})
export class ParamPaisesComponent implements OnInit {

  listaPaises: Pais[];
  currentPais: Pais;
  @Output() public selectPaisEmit: EventEmitter<Pais> = new EventEmitter<Pais>();
  @Output() public selectEstadoEmit: EventEmitter<Estado> = new EventEmitter<Estado>();

  constructor(private aperturaAuditoriaService: AperturaAuditoriaService) { }

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
    if (this.selectPaisEmit) {
      this.selectPaisEmit.emit(<Pais>event.detail.value);
    }
  }

  //Departamtentos.

  listaEstados: Estado[];
  currentEstado: Estado;

  buscarEstados(event) {
    let codigoEstado = event.detail.value;
    console.log("IVO estado",codigoEstado);
    console.log("IVO current pais event",event);

    if (codigoEstado.length > 3) {
      console.log("buscamos el pais");
      this.aperturaAuditoriaService.BuscarEstado(codigoEstado).subscribe((x) => {
        console.log(x);
        this.listaEstados = x.listEntities;
      });
    }
  }
  seleccionarEstado(event) {
    console.log("seleccionar pais", event);    
    if (this.selectEstadoEmit) {
      this.selectEstadoEmit.emit(<Estado>event.detail.value);
    }
  }

}
