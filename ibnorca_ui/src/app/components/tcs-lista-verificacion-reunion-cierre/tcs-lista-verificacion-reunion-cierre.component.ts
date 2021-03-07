import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tcs-lista-verificacion-reunion-cierre',
  templateUrl: './tcs-lista-verificacion-reunion-cierre.component.html',
  styleUrls: ['./tcs-lista-verificacion-reunion-cierre.component.scss'],
})
export class TcsListaVerificacionReunionCierreComponent implements OnInit {
  
  isIndeterminate:boolean;
  masterCheck:boolean;

  checkBoxList = [
    {item:'1.',
      value:"Agradecimiento.",
      isChecked:false
    },{item:'2.',
      value:"Confirmación del alcance y objetivos de la auditoría, alcance de la certificación y norma auditada.",
      isChecked:false
    },{item:'3.',
    value:"Informar que las evidencias de auditoría reunidas se basan en un muestreo por lo tanto se introduce un elemento de incertidumbre.",
    isChecked:false
  },{item:'4.',
    value:"Lectura y hallazgos de auditoría indicando su categorización .",
    isChecked:false
  },{item:'5.',
    value:"Lectura de conclusión de auditoría.",
    isChecked:false
  },{item:'6.',
    value:"Informar sobre el plazo máximo de 15 días calendario a partir de la culminación de la auditoría para él envió de las correcciones y acciones correctivas al auditor líder de las No conformidades menores y/o mayores identificadas para posterior aprobación por el auditor líder. En el caso de no conformidades mayores la organización debe de enviar las evidencias en un plazo de 90 días calendario a partir de la auditoría, para posterior aprobación por el auditor líder.",
    isChecked:false
  },{item:'7.',
    value:"Fecha estimada de la próxima auditoría.",
    isChecked:false
  },{item:'8.',
    value:"Informar acerca de los procesos que tienen IBNORCA, para el tratamiento de quejas y de apelaciones.",
    isChecked:false
  },{item:'9.',
    value:"Aclaraciones.",
    isChecked:false
  },{item:'10 .',
    value:"Firma del informe de auditoría.",
    isChecked:false
  },
  {item:'11.',
    value:"Revisión del alcance en el informe y el formulario de Datos de la organización.",
    isChecked:false
  }
  ]
  constructor() { }

  ngOnInit() {}

  checkMaster() {
    setTimeout(()=>{
      this.checkBoxList.forEach(obj => {
        obj.isChecked = this.masterCheck;
      });
    });
  }

  checkEvent() {
    const totalItems = this.checkBoxList.length;
    let checked = 0;
    this.checkBoxList.map(obj => {
      if (obj.isChecked) checked++;
    });
    if (checked > 0 && checked < totalItems) {
      //If even one item is checked but not all
      this.isIndeterminate = true;
      this.masterCheck = false;
    } else if (checked == totalItems) {
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
