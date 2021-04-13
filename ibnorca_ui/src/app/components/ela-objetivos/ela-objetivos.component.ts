import { Component, Input, OnInit } from "@angular/core";
import { ElaboracionAuditoriaService } from "src/app/services/elaboracion-auditoria.service";
import { Elalistaspredefinida } from "../../interfaces/elaboracion_auditoria/Elalistaspredefinida";

@Component({
  selector: "app-ela-objetivos",
  templateUrl: "./ela-objetivos.component.html",
  styleUrls: ["./ela-objetivos.component.scss"],
})
export class ElaObjetivosComponent implements OnInit {
  listContenido: Elalistaspredefinida[];
  listSubtitulos: Elalistaspredefinida[];
  @Input() area: string = "";
  constructor(
    private elaboracionAuditoriaService: ElaboracionAuditoriaService
  ) {
    this.listSubtitulos = new Array<Elalistaspredefinida>();
  }

  ngOnInit() {
    this.area = "TCS";
    this.elaboracionAuditoriaService
      .GetListasPredefinidas(this.area)
      .subscribe((x) => {
        this.listContenido = x.listEntities;
        console.log("this.listContenido", this.listContenido);
        this.listContenido.forEach((contenido) => {
          if (
            this.listSubtitulos.filter(
              (hh) => hh.nemotico === contenido.nemotico
            ).length === 0
          ) {
            this.listSubtitulos.push(contenido);
          }
        });
      });
  }

  ListByCategoria(nemotico) {
    if (this.listContenido) {
      return this.listContenido.filter((x) => x.nemotico == nemotico);
    } else return null;
  }
}