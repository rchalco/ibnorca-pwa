import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output } from "@angular/core";

import { Ciudad } from 'src/app/interfaces/General/Ciudad';
import { AperturaAuditoriaService } from 'src/app/services/apertura-auditoria.service';

@Component({
  selector: 'app-param-cuidades',
  templateUrl: './param-cuidades.component.html',
  styleUrls: ['./param-cuidades.component.scss'],
})
export class ParamCuidadesComponent implements OnInit {

  listaCiudades: Ciudad[];
  currentCiudad: Ciudad;
  @Output() public selectPaisEmit: EventEmitter<Ciudad> = new EventEmitter<Ciudad>();

  constructor(private aperturaAuditoriaService: AperturaAuditoriaService) { }

  ngOnInit() {}
  buscarCiudad(event) {
    let codigoCiudad = event.detail.value;
    if (codigoCiudad.length > 3) {
      console.log("buscamos el pais");
      this.aperturaAuditoriaService.BuscarCiudad(codigoCiudad).subscribe((x) => {
        console.log(x);
        this.listaCiudades = x.listEntities;
      });
    }
  }
  seleccionarCiudad(event) {
    console.log("seleccionar pais", event);    
    if (this.selectPaisEmit) {
      this.selectPaisEmit.emit(<Ciudad>event.detail.value);
    }
  }
}
