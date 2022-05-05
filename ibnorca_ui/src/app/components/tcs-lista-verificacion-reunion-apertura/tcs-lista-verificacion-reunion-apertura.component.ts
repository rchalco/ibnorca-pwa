/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Paramitemselect } from 'src/app/interfaces/elaboracion_auditoria/list-item-select';
import { ElaboracionAuditoriaService } from 'src/app/services/elaboracion-auditoria.service';

@Component({
  selector: 'app-tcs-lista-verificacion-reunion-apertura',
  templateUrl: './tcs-lista-verificacion-reunion-apertura.component.html',
  styleUrls: ['./tcs-lista-verificacion-reunion-apertura.component.scss'],
})
export class TcsListaVerificacionReunionAperturaComponent implements OnInit {
  isIndeterminate: boolean;
  masterCheck: boolean;

  pParamitemselect: Paramitemselect[];

  checkBoxList = [
    {
      item: '1.',
      value:
        'Presentación del equipo auditor, incluyendo una breve descripción de funciones.',
      isChecked: false,
    },
    {
      item: '2.',
      value: 'Confirmación del idioma que se utilizará durante la auditoría.',
      isChecked: false,
    },
    {
      item: '3.',
      value: 'Confirmación de los temas relativos a la confidencialidad.',
      isChecked: false,
    },
    {
      item: '4.',
      value:
        'Confirmación del alcance y objetivos de la auditoría, norma auditada.',
      isChecked: false,
    },
    {
      item: '5.',
      value:
        'Confirmación del plan de auditoría (incluye tipo y alcance de auditoría los objetivos y los criterios), cualquier cambio, y otros acuerdos pertinentes con el cliente.',
      isChecked: false,
    },
    {
      item: '6.',
      value: 'Confirmación de los canales comunicación formal.',
      isChecked: false,
    },
    {
      item: '7.',
      value:
        'Confirmación del estado de los hallazgos de la revisión o auditoría anterior cuando corresponda.',
      isChecked: false,
    },
    {
      item: '8.',
      value:
        'Confirmación de la disponibilidad, de las funciones y de la identidad de los guías y observadores.',
      isChecked: false,
    },
    {
      item: '9.',
      value:
        'El método para presentar la información, incluyendo cualquier categorización de los hallazgos de la auditoría.',
      isChecked: false,
    },
    {
      item: '10 .',
      value:
        'Información sobre las condiciones bajo las cuales la auditoría puede darse por terminada prematuramente.',
      isChecked: false,
    },
    {
      item: '11.',
      value:
        'Confirmación que durante la auditoría se mantendrá informada a la organización sobre el proceso de la auditoría y cualquier problema.',
      isChecked: false,
    },
    {
      item: '12.',
      value:
        'Confirmación de que el líder y los miembros del equipo auditor, que representan a IBNORCA, son responsables de la auditoría y que deben controlar la ejecución del plan de auditoría, incluyendo las actividades y las líneas de investigación de la auditoría.',
      isChecked: false,
    },
    {
      item: '13.',
      value:
        'Los métodos y procedimientos a utilizar para llevar a cabo la auditoría sobre la base de un muestreo.',
      isChecked: false,
    },
    {
      item: '14.',
      value:
        'Confirmación de que están disponibles los recursos y la logística necesaria para el equipo auditor.',
      isChecked: false,
    },
    {
      item: '15.',
      value:
        'Confirmación de los procedimientos de protección, emergencia y seguridad en el trabajo pertinentes para el equipo auditor.',
      isChecked: false,
    },
    {
      item: '16.',
      value: 'Confirmación de las TICs a aplicar y su disponibilidad.',
      isChecked: false,
    },
    { item: '17.', value: 'Aclaraciones.', isChecked: false },
  ];

  constructor(
    private elaboracionAuditoriaService: ElaboracionAuditoriaService
  ) {}
  ngOnInit() {
    this.elaboracionAuditoriaService
      .GetListasVerificacion(1)
      .subscribe((resul) => {
        this.pParamitemselect = resul.listEntities;
      });
  }

  checkMaster() {
    setTimeout(() => {
      this.checkBoxList.forEach((obj) => {
        obj.isChecked = this.masterCheck;
      });
    });
  }

  checkEvent() {
    const totalItems = this.checkBoxList.length;
    let checked = 0;
    this.checkBoxList.map((obj) => {
      if (obj.isChecked) {
        checked++;
      }
    });
    if (checked > 0 && checked < totalItems) {
      //If even one item is checked but not all
      this.isIndeterminate = true;
      this.masterCheck = false;
    } else if (checked === totalItems) {
      //If all are checked
      this.masterCheck = true;
      this.isIndeterminate = false;
    } else {
      //If none is checked
      this.isIndeterminate = false;
      this.masterCheck = false;
    }
  }
}
