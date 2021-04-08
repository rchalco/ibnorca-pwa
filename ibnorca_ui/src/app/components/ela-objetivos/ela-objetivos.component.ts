import { Component, OnInit } from "@angular/core";
import { ElaboracionAuditoriaService } from "src/app/services/elaboracion-auditoria.service";
import { Elalistaspredefinida } from "../../interfaces/elaboracion_auditoria/Elalistaspredefinida";

@Component({
  selector: "app-ela-objetivos",
  templateUrl: "./ela-objetivos.component.html",
  styleUrls: ["./ela-objetivos.component.scss"],
})
export class ElaObjetivosComponent implements OnInit {
  listContenido: Elalistaspredefinida[];

  constructor(
    private elaboracionAuditoriaService: ElaboracionAuditoriaService
  ) {}

  ngOnInit() {
    this.elaboracionAuditoriaService.GetListasPredefinidas().subscribe((x) => {
      this.listContenido = x.listEntities;
    });
  }

  ListByCategoria(nemotico) {
    if (this.listContenido) {
      return this.listContenido.filter((x) => x.nemotico == nemotico);
    } else return null;
  }
}
