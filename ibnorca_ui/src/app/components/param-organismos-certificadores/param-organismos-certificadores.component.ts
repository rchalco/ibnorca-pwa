import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Clasificador } from "src/app/interfaces/General/Clasificador";
import { AperturaAuditoriaService } from "../../services/apertura-auditoria.service";

@Component({
  selector: "app-param-organismos-certificadores",
  templateUrl: "./param-organismos-certificadores.component.html",
  styleUrls: ["./param-organismos-certificadores.component.scss"],
})
export class ParamOrganismosCertificadoresComponent implements OnInit {
  listaOrganismos: Clasificador[];
  currentOrganismo: Clasificador;
  @Input() defaultValue: String;
  @Output()
  seleccionarOrganismoEmitter: EventEmitter<Clasificador> = new EventEmitter<Clasificador>();

  constructor(private aperturaAuditoriaService: AperturaAuditoriaService) {}

  ngOnInit() {
    ///obtenemos los clasificadores
  }

  seleccionarOrganismo(event) {
    if (this.seleccionarOrganismoEmitter) {
    }
  }
}
