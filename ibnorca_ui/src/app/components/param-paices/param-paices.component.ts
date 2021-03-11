
import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output } from "@angular/core";

import { Pais } from 'src/app/interfaces/General/Pais';
import { AperturaAuditoriaService } from 'src/app/services/apertura-auditoria.service';

@Component({
  selector: 'app-param-paices',
  templateUrl: './param-paices.component.html',
  styleUrls: ['./param-paices.component.scss'],
})
export class ParamPaicesComponent implements OnInit {

  listaPaises: Pais[];
  currentPais: Pais;
  @Output() public selectPaisEmit: EventEmitter<Pais> = new EventEmitter<Pais>();

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

}
