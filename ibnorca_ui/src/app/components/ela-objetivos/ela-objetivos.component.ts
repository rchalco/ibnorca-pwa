import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Elacontenidoauditorium } from "src/app/interfaces/elaboracion_auditoria/PlanAuditoriaDTO";
import { ElaboracionAuditoriaService } from "src/app/services/elaboracion-auditoria.service";
import { Elalistaspredefinida } from "../../interfaces/elaboracion_auditoria/Elalistaspredefinida";

@Component({
  selector: "app-ela-objetivos",
  templateUrl: "./ela-objetivos.component.html",
  styleUrls: ["./ela-objetivos.component.scss"],
})
export class ElaObjetivosComponent implements OnInit {
  @Input() listContenido: Elacontenidoauditorium[];
  @Input() area: string = "";
  @Output() guardarContenidoEmitter = new EventEmitter<any>();
  listSubtitulos: Elacontenidoauditorium[];

  constructor(
    private elaboracionAuditoriaService: ElaboracionAuditoriaService
  ) {
    this.listSubtitulos = new Array<Elacontenidoauditorium>();
  }

  ngOnInit() {
    if (this.listContenido) {
      this.listContenido.forEach((contenido) => {               
        if (
          this.listSubtitulos.filter((hh) => hh.nemotico === contenido.nemotico)
            .length === 0
        ) {
          this.listSubtitulos.push(contenido);
        }
      });
    }
  }

  ListByCategoria(nemotico) {
    if (this.listContenido) {
      return this.listContenido.filter((x) => x.nemotico == nemotico);
    } else return null;
  }

  guardarContenido() {
    this.listContenido.forEach((x) => {
      x.seleccionado = x["select"] ? 1 : 0;
    });
    if (this.guardarContenidoEmitter) {
      this.guardarContenidoEmitter.emit(this.listContenido);
    }
  }
}
