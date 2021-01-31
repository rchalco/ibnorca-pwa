import { Component, OnInit } from "@angular/core";
import { CommonModule }   from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { DatabaseService } from "../services/database.service";
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ValidationControl } from "../interfaces/cross-ui/ValidationControl";
import { DataTest } from "../interfaces/Test/data-test";
import { ConvertFormToObject } from "../interfaces/cross-ui/ConvertFormToObject";

@Component({
  selector: "app-folder",
  templateUrl: "./folder.page.html",
  styleUrls: ["./folder.page.scss"],
})
export class FolderPage implements OnInit {
  public folder: string;
  ionicForm: FormGroup;
  defaultDate = "1987-07-30";
  

  nombreValidation = [
    new ValidationControl(Validators.required, "El nombre es requerido"),
    new ValidationControl(Validators.minLength(2), "El nombre debe tener al menos dos caracteres"),
  ];

  mailValidation = [
    new ValidationControl(Validators.required, "El e-mail es requerido"),
    new ValidationControl(Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'), "El mail no tiene el formato correcto"),
  ];

  celularValidation = [
    new ValidationControl(Validators.required, "El celular es requerido"),
    new ValidationControl( Validators.pattern('^[0-9]+$'), "El celular no tiene el formato correcto"),
  ];

  data = {
    name: '',
    mail: ''
	};

  constructor(
    private activatedRoute: ActivatedRoute,
    private databaseService: DatabaseService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get("id");
    this.databaseService.testDB();
    this.ionicForm = this.formBuilder.group({})
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  enviarForm(){

    if (!this.ionicForm.valid) {
      console.log('datos invalidos!')
      return false;
    } else {
      console.log(this.ionicForm.value)
      let dataTest: DataTest = new DataTest();
      ConvertFormToObject.convert(this.ionicForm, dataTest);
      console.log(dataTest);
    }
  }


  getDate(e) {
    console.log("se llamo la funcion de cambio", e);    
    
 }
}
