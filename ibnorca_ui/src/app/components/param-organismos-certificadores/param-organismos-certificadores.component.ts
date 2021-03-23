import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { PopoverController } from "@ionic/angular";
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

  constructor(
    private aperturaAuditoriaService: AperturaAuditoriaService,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {
    console.log("iniciamos el control");
    ///obtenemos los clasificadores
    this.aperturaAuditoriaService
      .BuscarOrganismosCertificadores()
      .subscribe((x) => {
        console.log("resulado de la busqueda oranismos", x);
        this.listaOrganismos = x.listEntities;
        /*if (this.defaultValue) {
          this.currentOrganismo = this.listaOrganismos.find(
            (x) => x.descripcion === this.defaultValue
          );
        }*/
      });
  }

  seleccionarOrganismo(event) {
    
    if (this.seleccionarOrganismoEmitter) {
      this.seleccionarOrganismoEmitter.emit(event);
    }
    if (this.popoverController) {
      this.popoverController.dismiss({
        item: event.detail.value.descripcion,
      });
    }
  }
}
