import { Component, ComponentFactoryResolver, EventEmitter, OnInit, Output } from "@angular/core";
import { Norma } from "src/app/interfaces/apertura_auditoria/Norma";
import { AperturaAuditoriaService } from "src/app/services/apertura-auditoria.service";

@Component({
  selector: "app-buscar-norma",
  templateUrl: "./buscar-norma.component.html",
  styleUrls: ["./buscar-norma.component.scss"],
})
export class BuscarNormaComponent implements OnInit {
  listaNormas: Norma[];
  currentNorma: Norma;
  @Output() public selectNorma: EventEmitter<Norma> = new EventEmitter<Norma>();;

  constructor(private aperturaAuditoriaService: AperturaAuditoriaService) {}

  ngOnInit() {}

  buscar(event) {
    let codigoNorma = event.detail.value;
    if (codigoNorma.length > 3) {
      console.log("buscamos la norma");
      this.aperturaAuditoriaService.BuscarNormas(codigoNorma).subscribe((x) => {
        console.log(x);
        this.listaNormas = x.listEntities;
      });
    }
  }
  seleccionarNorma(event) {
    console.log("seleccionar norma", event);
    console.log("selectNorma",this.selectNorma);
    if (this.selectNorma) {
      this.selectNorma.emit(<Norma>event.detail.value);
    }
  }
}
