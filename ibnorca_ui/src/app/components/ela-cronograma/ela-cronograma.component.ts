import { Elaauditorium, Elacronogama } from "./../../interfaces/elaboracion_auditoria/PlanAuditoriaDTO";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-ela-cronograma",
  templateUrl: "./ela-cronograma.component.html",
  styleUrls: ["./ela-cronograma.component.scss"],
})
export class ElaCronogramaComponent implements OnInit {
  @Input() currentElacronogama: Elacronogama;
  @Output() guardarCronogramaEmitter= new EventEmitter<Elacronogama>();
  @Output() cancelarCronogramaEmitter= new EventEmitter<Elacronogama>();
  
  ionicFormHorario: FormGroup;
  constructor(
    private toastController: ToastController,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.currentElacronogama = new Elacronogama();
    this.ionicFormHorario = this.formBuilder.group({});
  }

  seleccionarParticipante(event){

  }

  cancelar(){    
    if(this.cancelarCronogramaEmitter){
      this.cancelarCronogramaEmitter.emit(this.currentElacronogama);
    }
  }

  guardarCronograma(){
    if(this.guardarCronogramaEmitter){
      this.guardarCronogramaEmitter.emit(this.currentElacronogama);
    }
  }

}
