import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output } from "@angular/core";
import { Estado } from 'src/app/interfaces/General/Estado';
import { AperturaAuditoriaService } from "src/app/services/apertura-auditoria.service";

@Component({
  selector: 'app-param-estados-departamentos',
  templateUrl: './param-estados-departamentos.component.html',
  styleUrls: ['./param-estados-departamentos.component.scss'],
})
export class ParamEstadosDepartamentosComponent implements OnInit {

  listaEstados: Estado[];
  currentEstado: Estado;
  @Output() public selectPaisEmit: EventEmitter<Estado> = new EventEmitter<Estado>();

  constructor(private aperturaAuditoriaService: AperturaAuditoriaService) { }

  ngOnInit() {}

  buscarEstados(event) {
    let codigoEstado = event.detail.value;
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
    if (this.selectPaisEmit) {
      this.selectPaisEmit.emit(<Estado>event.detail.value);
    }
  }

}
