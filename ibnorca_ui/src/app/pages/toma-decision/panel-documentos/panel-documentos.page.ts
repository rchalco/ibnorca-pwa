import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-panel-documentos",
  templateUrl: "./panel-documentos.page.html",
  styleUrls: ["./panel-documentos.page.scss"],
})
export class PanelDocumentosPage implements OnInit {
  select_component = "acta";
 
  constructor() {}

  ngOnInit() {}
  segmentChanged(event) {
    this.select_component = event.detail.value;
  }
}
