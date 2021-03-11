import { Component, OnInit } from "@angular/core";
import { ElaboracionAuditoriaService } from "src/app/services/elaboracion-auditoria.service";

@Component({
  selector: "app-ivo",
  templateUrl: "./ivo.page.html",
  styleUrls: ["./ivo.page.scss"],
})
export class IvoPage implements OnInit {
  constructor(
    private elaboracionAuditoriaService: ElaboracionAuditoriaService
  ) {}

  ngOnInit() {
    console.log("Ingresando a INit");

    this.elaboracionAuditoriaService.GetListasVerificacion(1).subscribe((resul) =>{
      console.log(resul);
    });
  }

  
}
