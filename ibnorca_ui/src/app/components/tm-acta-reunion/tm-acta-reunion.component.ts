import { DatePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-tm-acta-reunion",
  templateUrl: "./tm-acta-reunion.component.html",
  styleUrls: ["./tm-acta-reunion.component.scss"],
})
export class TmActaReunionComponent implements OnInit {
  consideracion = "";
  revison = "";
  varios = "";
  fecha = this.datepipe.transform(new Date(), "dd/MM/yyyy");
  ionicForm: FormGroup;
  reglamentos = [
    {
      nombre: "Reglamento particular de Cemento",
      norma_base: "ASTM C 150",
      descripcion:
        "xxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      decision: "Aprobado",
    },
    {
      nombre: "Reglamento particular de Cemento",
      norma_base: "ASTM C 150",
      descripcion:
        "xxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      decision: "Aprobado",
    },
    {
      nombre: "Reglamento particular de Cemento",
      norma_base: "ASTM C 150",
      descripcion:
        "xxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      decision: "Aprobado",
    },
  ];

  productos = [
    {
      proceso: "RENOVACIÓN ",
      empresa: "113 A",
      producto: "Agua de mesa no carbonatada (sin gas) marca 1  ",
      norma: "NB 325002:2004",
      desc_revision: "ZZZZZZZZZZZZZZZZZZZZZZZZ ZZZZZZZZZZZ",
      confirmacion: "SI",
      recomendacion: "Positiva/Negativa/Pendiente",
    },
    {
      proceso: "RENOVACIÓN ",
      empresa: "113 A",
      producto: "Agua de mesa no carbonatada (sin gas) marca 1  ",
      norma: "NB 325002:2004",
      desc_revision: "ZZZZZZZZZZZZZZZZZZZZZZZZ ZZZZZZZZZZZ",
      confirmacion: "SI",
      recomendacion: "Positiva/Negativa/Pendiente",
    },
    {
      proceso: "RENOVACIÓN ",
      empresa: "113 A",
      producto: "Agua de mesa no carbonatada (sin gas) marca 1  ",
      norma: "NB 325002:2004",
      desc_revision: "ZZZZZZZZZZZZZZZZZZZZZZZZ ZZZZZZZZZZZ",
      confirmacion: "SI",
      recomendacion: "Positiva/Negativa/Pendiente",
    },
  ];
  lConsideracione = [
    "Se realizó la lectura del acta anterior para considerar los temas pendientes en la reunión del día de hoy",
    "No se tienen pendientes de la reunión anterior.",
  ];

  lRevision = [
    "N/A",
    "Se realizó la revisión y la toma de decisión respecto a los siguientes reglamentos particulares:",
  ];

  lVarios = [
    "N/A",
    "Describir los criterios y comentarios más importantes, vertidos a cerca de otros temas de interés del Área de Certificación de Producto, por los miembros del CONCER y/o auditores",
  ];

  seleccionarConsideraciones(event) {
    this.consideracion = event.detail.value;
  }
  seleccionarRevision(event) {
    this.revison = event.detail.value;
  }
  seleccionarVarios(event) {
    this.varios = event.detail.value;
  }

  constructor(public datepipe: DatePipe, public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({});
  }
}
