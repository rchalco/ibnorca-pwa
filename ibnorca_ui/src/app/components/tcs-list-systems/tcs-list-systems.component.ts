import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { SystemList } from 'src/app/interfaces/apertura_auditoria/system_list';

@Component({
  selector: 'app-tcs-list-systems',
  templateUrl: './tcs-list-systems.component.html',
  styleUrls: ['./tcs-list-systems.component.scss'],
})
export class TcsListSystemsComponent implements OnInit {

  constructor(private popoverController: PopoverController,  public formBuilder: FormBuilder) {}
  ionicForm: FormGroup;

  @Input() systemList: SystemList[] = [];
  display = false;
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({});
  }
  toggle() {
    console.log("se expande");
    this.display = !this.display;
  }
  guardarSystem(){

  }
  // async mostrarEdicionProducto(event) {
  //   console.log("mostramos popover");
  //   const popover = await this.popoverController.create({
  //     component: ProductDetailComponent,
  //     componentProps: {
  //       formGruop: this.cronogramaForm,
  //       label: "Fecha Eejcucion",
  //       name: "FechaEjecucion",
  //       type: "datetime",
  //       form: "form",
  //       defaultValue: Date(),
  //     },
  //     event: event,
  //     mode: "md",
  //     backdropDismiss: false,
  //   });
  //   await popover.present();
  //   const info = await popover.onDidDismiss();
  //   console.log("Padre", info);
  // }

}
