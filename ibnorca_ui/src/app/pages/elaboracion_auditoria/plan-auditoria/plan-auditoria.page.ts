import { DatePipe } from "@angular/common";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { PopoverController } from "@ionic/angular";
import { CustomInputComponent } from "src/app/components/custom-input/custom-input.component";
import { ProductList } from "src/app/interfaces/apertura_auditoria/product_list";

interface Oficina{
Id: Number;
NombreOficina: string;

}

@Component({
  selector: "app-plan-auditoria",
  templateUrl: "./plan-auditoria.page.html",
  styleUrls: ["./plan-auditoria.page.scss"],
})
export class PlanAuditoriaPage implements OnInit {
  mode = "TCP";
  //mode = "TCS";
  /*@ViewChild(TcpListProductsComponent, { static: false })
  listProducts: TcpListProductsComponent;

  
  listDTOSystemList: SystemList[] = [];*/
  listDTOProduct: ProductList[] = [];

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

  lstCronograma = [
    {
      Fecha: this.datepipe.transform(new Date(), 'dd/MM/yyyy'),
      Hora: "",
      Oficina: "",
      Requisito: "",
      Equipo: "",
      Responsable: ""
    }
  ];

  users: Oficina[] = [
    {
      Id: 1,
      NombreOficina: "La Paz",
    },
    {
      Id: 2,
      NombreOficina: "Oruro",
    },
    {
      Id: 3,
      NombreOficina: "Cochabamba",
    }
  ];

  compareWith(o1: Oficina, o2: Oficina) {
    return o1 && o2 ? o1.Id === o2.Id : o1 === o2;
  }

  lstOficina = [
    {
      Id: 1,
      NombreOficina: "La Paz"
    },
    {
      Id: 2,
      NombreOficina: "Oruro",
    },
    {
      Id: 3,
      NombreOficina: "Cochabamba"
    },
    {
      Id: 4,
      NombreOficina: "La Paz 2",
    },
    {
      Id: 5,
      NombreOficina: "La Paz 3"
    }
  ];

  lstEquipo = [
    {
      Id: 1,
      Funcionario: "AAAA AAAA AAAAA"
    },
    {
      Id: 2,
      Funcionario: "BBB BBB BBB",
    },
    {
      Id: 3,
      Funcionario: "CCC CCC CCC"
    },
    {
      Id: 4,
      Funcionario: "DDD DDD DDD",
    },
    {
      Id: 5,
      Funcionario: "EEE EEE EEE"
    }
  ];

  fechaEjecucion = "01/01/2000";

  ionicForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    private popoverController: PopoverController,
    public datepipe: DatePipe
    ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({});
  }

  adicionarPersonal(){
    this.lstEquipoAuditor.push({
      nombre: "nuevo", diasIsitu: 0, diasRemoto: 0 
    });
  }

  adicionarCronograma(){
    this.lstCronograma.push({
      Fecha: this.datepipe.transform(new Date(), 'dd/MM/yyyy'), Hora: "", Oficina: "", Requisito: "", Equipo: "", Responsable:"" 
    });
  }
  async mostrarFecha(event) {
    console.log("ingreso");
    const popover = await this.popoverController.create({
      component: CustomInputComponent,
      componentProps: {
        formGruop: this.ionicForm,
        label: "Fecha Eejcucion",
        name: "FechaEjecucion",
        type: "datetime",
        form: "form",
        defaultValue: Date(),
      },
      event: event,
      mode: "ios",
      backdropDismiss: false,
    });
    await popover.present();
    const info = await popover.onDidDismiss();
    console.log("Padre", info);
    this.fechaEjecucion =this.datepipe.transform(info.data.item, 'dd/MM/yyyy');
  }
  

}
