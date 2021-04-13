import { Component, OnInit } from "@angular/core";
import { Paramdocumento } from "src/app/interfaces/General/Paramdocumento";
import { ElaboracionAuditoriaService } from "src/app/services/elaboracion-auditoria.service";

@Component({
  selector: "app-param-documentos",
  templateUrl: "./param-documentos.component.html",
  styleUrls: ["./param-documentos.component.scss"],
})
export class ParamDocumentosComponent implements OnInit {
  listDocumentos: Paramdocumento[];
  area: string = "TCS";
  constructor(
    private elaboracionAuditoriaService: ElaboracionAuditoriaService
  ) {}

  ngOnInit() {
    this.elaboracionAuditoriaService.GetListasDocumetos(this.area, "ELABORACION").subscribe(
      x => {
        this.listDocumentos = x.listEntities;
      }
    );
  }
}
