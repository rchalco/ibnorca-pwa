import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Tmddocumentacionauditorium } from "src/app/interfaces/toma_decisiones/tmddocumentacionauditorium";

@Component({
  selector: "app-editor-documento",
  templateUrl: "./editor-documento.component.html",
  styleUrls: ["./editor-documento.component.scss"],
})
export class EditorDocumentoComponent implements OnInit {
  @Input() titulo;
  @Input() tmddocumentacionauditorium: Tmddocumentacionauditorium;
  @Output() guardarContenidoEmitter = new EventEmitter<any>();

  contenido = "";
  constructor() {}

  ngOnInit() {
    if (!this.tmddocumentacionauditorium) {
      this.tmddocumentacionauditorium = new Tmddocumentacionauditorium();
    }
  }

  ngOnDestroy(): void {}

  guardarContenido() {
    if (this.guardarContenidoEmitter) {
      this.guardarContenidoEmitter.emit(this.contenido);
    }
  }
}
