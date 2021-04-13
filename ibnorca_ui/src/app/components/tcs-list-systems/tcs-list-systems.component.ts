import {
  Praciclonormassistema,
  Pradireccionespasistema,
} from "./../../interfaces/apertura_auditoria/Praprogramasdeauditorium";
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { PopoverController } from "@ionic/angular";
import { Personal } from "src/app/interfaces/apertura_auditoria/personal";

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
  mode: string = "list";
  currentIndex = -1;
  currentIndexNorma = -1;
  //currentDireccion: Pradireccionespasistema;
  operacion = "";
  @Input() nombreOrganizacion: string;
  @Input() direccionesSistema: Pradireccionespasistema[] = [];
  @Input() normasSistema: Praciclonormassistema[] = [];
  @Input() allowHorario: boolean = false;
  @Input() allowDelete: boolean = true;
  @Input() isAuditor: boolean = false;
  @Input() listaParticipantes: Personal[];

  currentdireccionesSistema: Pradireccionespasistema;
  currentnormaSistema: Praciclonormassistema;

  display = false;
  
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({});
  }
  toggle() {
    console.log("se expande");
    this.display = !this.display;
  }
  guardarDireccion(event) {
    this.mode = "list";
    console.log("guardar direccion");
    if (this.operacion === "UPD") this.direccionesSistema[this.currentIndex] = event;
    else this.direccionesSistema.push(event);
  }
  cancelarDireccion(event) {
    this.mode = "list";
  }

  editarDireccion(item, i) {
    console.log("item", item);
    this.mode = "EDIT";
    this.operacion = "UPD";
    this.currentdireccionesSistema = item; 
    this.currentIndex = i;
  }

  editarHorario(item, i) {    
    this.mode = "EDIT_HORARIO";
    this.operacion = "UPD";
  }

  eliminarDireccion(index) {
    console.log("evento eliminar", index);
    this.direccionesSistema.splice(index, 1);
  }

  adicionarDireccion() {
    this.mode = "EDIT";
    this.operacion = "ADD";
    this.currentdireccionesSistema = new Pradireccionespasistema();
    this.currentdireccionesSistema.pais = "Bolivia";
    
  }

  adicionarNorma() {
    this.mode = "EDIT1";
    this.operacion = "ADD";
    this.currentnormaSistema = new Praciclonormassistema();
    //this.currentnormaSistema.pais = "Bolivia";
    
  }

  editarNorma(item, i) {
    console.log("editar norma",item);
    this.mode = "EDIT1";
    this.operacion = "UPD";
    this.currentnormaSistema = item; 
    this.currentIndexNorma = i;
  }
  cancelarNorma(event) {
    this.mode = "list";
  }

  guardarNorma(event) {
    this.mode = "list";
    console.log("guardar norma");
    if (this.operacion === "UPD") this.normasSistema[this.currentIndex] = event;
    else this.normasSistema.push(event);
  }
  eliminarNorma(index) {
    console.log("evento eliminar norma", index);
    this.normasSistema.splice(index, 1);
  }

  cancelarCronogramaEmitter(event) {
    this.mode = "list";
  }
  guardarCronogramaEmitter(event) {
    this.mode = "list";
  }
  
}
