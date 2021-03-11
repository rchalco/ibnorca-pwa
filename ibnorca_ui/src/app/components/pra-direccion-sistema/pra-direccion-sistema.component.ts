import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Pradireccionespasistema } from "src/app/interfaces/apertura_auditoria/Praprogramasdeauditorium";

@Component({
  selector: 'app-pra-direccion-sistema',
  templateUrl: './pra-direccion-sistema.component.html',
  styleUrls: ['./pra-direccion-sistema.component.scss'],
})
export class PraDireccionSistemaComponent implements OnInit {
  ionicForm: FormGroup;
  @Input() pradireccionespasistema: Pradireccionespasistema;
  @Output() guardarProductEmitter= new EventEmitter<Pradireccionespasistema>();
  constructor(
    private toastController: ToastController,
    public formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({});
  }

}
