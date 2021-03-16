import { ThrowStmt } from "@angular/compiler";
import { Component, Input, OnInit } from "@angular/core";
import { CargoItem } from "src/app/interfaces/apertura_auditoria/cargo_item";
import { Personal } from "src/app/interfaces/apertura_auditoria/personal";
import { Pracicloparticipante } from "src/app/interfaces/apertura_auditoria/Praprogramasdeauditorium";
import { AperturaAuditoriaService } from "src/app/services/apertura-auditoria.service";

@Component({
  selector: "app-ciclo-participante",
  templateUrl: "./ciclo-participante.component.html",
  styleUrls: ["./ciclo-participante.component.scss"],
})
export class CicloParticipanteComponent implements OnInit {
  @Input() currentPracicloparticipantes: Pracicloparticipante[];
  visibleAdd = "NO";
  ListaCargoItem: CargoItem[];
  currentCargo: CargoItem;
  cantidadDias = 0;
  ListaPersonal: Personal[];
  currentPersonal: Personal;
  operacion = "";
  selectParticipante: Pracicloparticipante;
  currentIndex = 0;
  constructor(private aperturaAuditoriaService: AperturaAuditoriaService) {}

  ngOnInit() {
    this.ObtenerCargos();
  }

  adicionarParticipante() {
    this.visibleAdd = "SI";
    this.operacion = "ADD";
    this.selectParticipante = new Pracicloparticipante();
  }

  editar(item, index) {
    this.currentIndex = index;
    this.selectParticipante = item;
    this.currentCargo = this.ListaCargoItem.filter(
      (x) => x.idCargoPuesto === this.selectParticipante._cargo.idCargoPuesto
    )[0];
    this.ObtenerPersonalXIdCargo(this.currentCargo.idCargoPuesto);
    this.currentPersonal = this.selectParticipante._personal;    
    this.visibleAdd = "SI";
    this.operacion = "UPD";
  }

  eliminar(index) {
    console.log("item eliminado");
    this.operacion = "DEL";
    this.currentPracicloparticipantes.splice(index, 1);
  }

  ObtenerCargos() {
    this.aperturaAuditoriaService.ObtenerCargos().subscribe((resul) => {
      this.ListaCargoItem = resul.listEntities;
    });
  }

  ObtenerPersonalXCargos(event) {    
    let IdCargo = event.detail.value.idCargoPuesto;
    this.currentCargo = event.detail.value;
    this.aperturaAuditoriaService
      .ObtenerParticipanteXCargos(IdCargo)
      .subscribe((resul) => {
        this.ListaPersonal = resul.listEntities;
      });
  }

  ObtenerPersonalXIdCargo(IdCargo) {
    this.aperturaAuditoriaService
      .ObtenerParticipanteXCargos(IdCargo)
      .subscribe((resul) => {    
        this.ListaPersonal = resul.listEntities;
      });
  }

  seleccionarPersonal(event) {    
    this.currentPersonal = event.detail.value;
    this.selectParticipante.dias = this.cantidadDias;
    this.selectParticipante.cargoDetalleWs = JSON.stringify(this.currentCargo);
    this.selectParticipante.idCargoWs = Number(this.currentCargo.idCargoPuesto);
    this.selectParticipante._cargo = this.currentCargo;
    this.selectParticipante.idParticipanteWs = Number(this.currentPersonal.idCliente);
    this.selectParticipante.participanteDetalleWs = JSON.stringify(this.currentPersonal);
    this.selectParticipante._personal = this.currentPersonal;
    this.visibleAdd = "NO";
    console.log(this.selectParticipante);
    if (this.operacion == "UPD") {
      this.currentPracicloparticipantes[
        this.currentIndex
      ] = this.selectParticipante;
    }
    if (this.operacion == "ADD") {
      this.currentPracicloparticipantes.push(this.selectParticipante);
    }
    this.currentPersonal = null;
    this.currentCargo = null;
  }
  cancelar(){
    this.visibleAdd = "NO";
  }
}
