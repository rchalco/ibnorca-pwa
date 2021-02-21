import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-verificacion-apertura',
  templateUrl: './lista-verificacion-apertura.component.html',
  styleUrls: ['./lista-verificacion-apertura.component.scss'],
})
export class ListaVerificacionAperturaComponent implements OnInit {

  data = [
    {
      name: 'primary',
      selected: true
    },
    {
      name: 'secondary',
      selected: false
    },
    {
      name: 'tertiary',
      selected: true
    },
    {
      name: 'success',
      selected: false
    },
  ];

constructor() { }

public clickCheck(check){
  console.log(check);
}

  ngOnInit() {}

}
