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
  @Input() allowEdit: boolean = true;

  visibleAdd = "NO";
  ListaCargoItem: CargoItem[];
  ListaPersonal: Personal[];
  operacion = "";
  selectParticipante: Pracicloparticipante;
  currentIndex = 0;
  constructor(private aperturaAuditoriaService: AperturaAuditoriaService) {}

  ngOnInit() {
    this.selectParticipante = new Pracicloparticipante();
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
    this.selectParticipante._cargo = this.ListaCargoItem.filter(
      (x) => x.idCargoPuesto === this.selectParticipante._cargo.idCargoPuesto
    )[0];
    this.ObtenerPersonalXIdCargos(this.selectParticipante._cargo.idCargoPuesto);
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
    this.selectParticipante._cargo = event.detail.value;
    this.aperturaAuditoriaService
      .ObtenerParticipanteXCargos(IdCargo)
      .subscribe((resul) => {
        this.ListaPersonal = resul.listEntities;
      });
  }

  ObtenerPersonalXIdCargos(idCargo) {
    this.aperturaAuditoriaService
      .ObtenerParticipanteXCargos(idCargo)
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
    this.selectParticipante._personal = event.detail.value;
    this.selectParticipante.cargoDetalleWs = JSON.stringify(
      this.selectParticipante._cargo
    );
    this.selectParticipante.idCargoWs = Number(
      this.selectParticipante._cargo.idCargoPuesto
    );
    this.selectParticipante.idParticipanteWs = Number(
      this.selectParticipante._personal.idCliente
    );
    this.selectParticipante.participanteDetalleWs = JSON.stringify(
      this.selectParticipante._personal
    );
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
  }

  cancelar() {
    this.visibleAdd = "NO";
  }
}
