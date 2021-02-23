import { Component, OnInit } from '@angular/core';
import { AperturaAuditoriaService } from 'src/app/services/apertura-auditoria.service';

@Component({
  selector: 'app-ruben',
  templateUrl: './ruben.page.html',
  styleUrls: ['./ruben.page.scss'],
})
export class RubenPage implements OnInit {

  constructor(private aperturaAuditoriaService: AperturaAuditoriaService) { }

  ngOnInit() {
    this.aperturaAuditoriaService.ObtenerProgramaAuditoria(1).subscribe(
      (resul) => {
        console.log("llamaa al servicio", resul);
      }
    );
  }

}
