import { Component, OnInit } from '@angular/core';
import { AperturaAuditoriaService } from 'src/app/services/apertura-auditoria.service';

@Component({
  selector: 'app-registro-solicitud-servicio',
  templateUrl: './registro-solicitud-servicio.page.html',
  styleUrls: ['./registro-solicitud-servicio.page.scss'],
})
export class RegistroSolicitudServicioPage implements OnInit {

  fileToUpload: File = null;
  procesoFinalizado = false;
  constructor(private aperturaAuditoriaService: AperturaAuditoriaService) { }

  ngOnInit() {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.aperturaAuditoriaService.CargarSolicitud(this.fileToUpload).subscribe(x => {
      console.log(x);
      this.aperturaAuditoriaService.showMessageResponse(x);
      this.procesoFinalizado = true;
      //this.aperturaAuditoriaService.showMessageSucess("Solcitud cargada correctamente");
    });
  }

}
