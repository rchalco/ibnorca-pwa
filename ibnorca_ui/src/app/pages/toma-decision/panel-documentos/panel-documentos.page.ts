import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-panel-documentos",
  templateUrl: "./panel-documentos.page.html",
  styleUrls: ["./panel-documentos.page.scss"],
})
export class PanelDocumentosPage implements OnInit {
  select_component = "acta";
  idCiclo = 166;
  area = "TCS"
  proceso = "TOMA_DECISION";
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.idCiclo = params.idCiclo;
      this.area = params.area;
    });
  }
  segmentChanged(event) {
    this.select_component = event.detail.value;
  }
}
