
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
  currentNorma: Pais;
  @Output() public selectNorma: EventEmitter<Pais> = new EventEmitter<Pais>();

  constructor(private aperturaAuditoriaService: AperturaAuditoriaService) { }

  ngOnInit() {}

  buscarPais(event) {
    let codigoPais = event.detail.value;
    if (codigoPais.length > 3) {
      console.log("buscamos la norma");
      this.aperturaAuditoriaService.BuscarPais(codigoPais).subscribe((x) => {
        console.log(x);
        this.listaPaises = x.listEntities;
      });
    }
  }
  seleccionarNorma(event) {
    console.log("seleccionar norma", event);
    console.log("selectNorma",this.selectNorma);
    if (this.selectNorma) {
      this.selectNorma.emit(<Pais>event.detail.value);
    }
  }

}
