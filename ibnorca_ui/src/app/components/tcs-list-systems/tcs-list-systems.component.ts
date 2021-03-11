import { Praciclonormassistema, Pradireccionespasistema } from './../../interfaces/apertura_auditoria/Praprogramasdeauditorium';
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { PopoverController } from "@ionic/angular";



@Component({
  selector: "app-tcs-list-systems",
  templateUrl: "./tcs-list-systems.component.html",
  styleUrls: ["./tcs-list-systems.component.scss"],
})
export class TcsListSystemsComponent implements OnInit {
  constructor(
    private popoverController: PopoverController,
    public formBuilder: FormBuilder
  ) {}
  ionicForm: FormGroup;
  @Input() nombreOrganizacion: string;
  @Input() direccionesSistema: Pradireccionespasistema[] = [];
  @Input() normasSistema: Praciclonormassistema[] = [];
  display = false;
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({});
  }
  toggle() {
    console.log("se expande");
    this.display = !this.display;
  }
  guardarSystem() {}
}
