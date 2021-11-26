import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-com-calendar-month-year',
  templateUrl: './com-calendar-month-year.component.html',
  styleUrls: ['./com-calendar-month-year.component.scss'],
})
export class ComCalendarMonthYearComponent implements OnInit {
  items = [
    { value: 1, label: "Enero" },
    { value: 2, label: "Febrero" },
    { value: 3, label: "Marzo" },
    { value: 4, label: "Abril" },
    { value: 5, label: "Mayo" },
    { value: 6, label: "Junio" },
    { value: 7, label: "Julio" },
    { value: 8, label: "Agosto" },
    { value: 9, label: "Septiembre" },
    { value: 10, label: "Octubre" },
    { value: 11, label: "Noviembre" },
    { value: 12, label: "Diciembre" }, 
  ]; 

  mesSelected="";
  yearSelected=2021;
  constructor() { }

  ngOnInit() {}
//selectMonth
async selectMonth(event) {
  console.log(event);
  //console.log(this.items.find((x) => x.value == value));
  //await popover.present();
  //const info = await popover.onDidDismiss();
  console.log("pa");
  //this.mesProgramado = info.data.item.label;
}

ocSelectMOnth(_mes) {
  console.log("Mes seleccionado",_mes);
  this.mesSelected=_mes;

}
modifierYear(_increment){
  this.yearSelected+=_increment;
}


}
