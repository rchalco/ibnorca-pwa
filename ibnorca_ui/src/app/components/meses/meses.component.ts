import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";


@Component({
  selector: "app-meses",
  templateUrl: "./meses.component.html",
  styleUrls: ["./meses.component.scss"],
})
export class MesesComponent implements OnInit {
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
    
  constructor(private popoverController: PopoverController) {}

  ngOnInit() {}

  selectMes(value) {
    console.log(this.items.find((x) => x.value == value));
    return this.popoverController.dismiss({
      item: this.items.find((x) => x.value == value),
    });
  }
}
