import { Component, Input, OnInit } from "@angular/core";
import { Paramdocumento } from "src/app/interfaces/General/Paramdocumento";
import { DocmentosServicesService } from "src/app/services/docmentos-services.service";
import { ElaboracionAuditoriaService } from "src/app/services/elaboracion-auditoria.service";

@Component({
  selector: "app-param-documentos",
  templateUrl: "./param-documentos.component.html",
  styleUrls: ["./param-documentos.component.scss"],
})
export class ParamDocumentosComponent implements OnInit {
  listDocumentos: Paramdocumento[];
  @Input() area: string = "TCS";
  @Input() IdCiclo = 0;
  @Input() proceso: string = "ELABORACION";

  constructor(
    private elaboracionAuditoriaService: ElaboracionAuditoriaService,
    private docmentosServicesService: DocmentosServicesService 
  ) {}

  ngOnInit() {
    this.elaboracionAuditoriaService
      .GetListasDocumetos(this.area, this.proceso)
      .subscribe((x) => {
        this.listDocumentos = x.listEntities;
      });
  }

  descargarDocumento(nombrePlantilla) {
    this.docmentosServicesService.GenerarDocumento(
      this.IdCiclo,
      nombrePlantilla
    );
  }
}
