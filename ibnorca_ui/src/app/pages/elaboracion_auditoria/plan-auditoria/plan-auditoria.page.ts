import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-plan-auditoria",
  templateUrl: "./plan-auditoria.page.html",
  styleUrls: ["./plan-auditoria.page.scss"],
})
export class PlanAuditoriaPage implements OnInit {
  lstEquipoAuditor = [
    {
      nombre: "XXXXXXXXXXXXXXXXX (AUDITOR LÌDER)",
      diasIsitu: 0,
      diasRemoto: 0,
    },
    { nombre: "XXXXXXXXXXXXXXXXX (AUDITOR 1)", diasIsitu: 0, diasRemoto: 0 },
    { nombre: "XXXXXXXXXXXXXXXXX (AUDITOR 2)", diasIsitu: 0, diasRemoto: 0 },
    { nombre: "XXXXXXXXXXXXXXXXX (AUDITOR 3)", diasIsitu: 0, diasRemoto: 0 },
    {
      nombre: "XXXXXXXXXXXXXXXXX (AUDITOR ENSAYOS CON TESTIGO)",
      diasIsitu: 0,
      diasRemoto: 0,
    },
    {
      nombre: "XXXXXXXXXXXXXXXXX (AUDITOR EN FORMACIÓN)",
      diasIsitu: 0,
      diasRemoto: 0,
    },
  ];
  ionicForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({});
  }

  adicionarPersonal(){
    this.lstEquipoAuditor.push({
      nombre: "nuevo", diasIsitu: 0, diasRemoto: 0 
    });
  }
}
