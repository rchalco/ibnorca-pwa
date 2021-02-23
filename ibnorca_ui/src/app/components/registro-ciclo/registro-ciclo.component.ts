import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro-ciclo',
  templateUrl: './registro-ciclo.component.html',
  styleUrls: ['./registro-ciclo.component.scss'],
})
export class RegistroCicloComponent implements OnInit {

  ionicForm: FormGroup;

  constructor(public formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({});
  }

  guardarCiclo(){
    console.log("ciclo guardado correctamente");
  }

  cancelar(){
    console.log("cancelamdo");
  }

}
