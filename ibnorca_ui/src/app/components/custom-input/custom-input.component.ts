import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import {
  Form,
  FormControl,
  FormGroup,
  NgForm,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { IonDatetime, PopoverController } from "@ionic/angular";
import { BrMaskModel } from "br-mask";
import { ValidationControl } from "src/app/interfaces/cross-ui/ValidationControl";

@Component({
  selector: "app-custom-input",
  templateUrl: "./custom-input.component.html",
  styleUrls: ["./custom-input.component.scss"],
})
export class CustomInputComponent implements OnInit {
  @Input() label: string;
  @Input() name: string;
  @Input() type: string;
  @Input() formGruop: FormGroup;
  @Input() Validations: ValidationControl[];
  @Input() form: NgForm;
  @Input() defaultValue: any;
  @Output() _ionChange = new EventEmitter();
  @Input() brmasker: BrMaskModel = {}; //https://github.com/amarkes/br-mask
  customPickerOption: any;
  customDate: Date;
  @Input() formatDate = "DD/MM/YYYY";

  constructor(private popoverController: PopoverController) {}

  ngOnInit() {
    if (this.formGruop && !this.formGruop.get(this.name)) {
      this.formGruop.addControl(this.name, new FormControl(this.defaultValue));
      let validators: ValidatorFn[] = [];
      if (this.Validations) {
        for (let val of this.Validations) {
          validators.push(val.validator);
        }
        this.formGruop.controls[this.name].setValidators(validators);
      }
    }

    this.customPickerOption = {
      buttons: [
        {
          text: "Confirmar",
          handler: (event) => {
            console.log(event);
            this.customDate = new Date(
              event.year.value,
              event.month.value-1,
              event.day.value,
              0,
              0,
              0,
              0
            );
            
            if (this.type === "datetime") {              
              this.formGruop.controls[this.name]["valueDate"] = this.customDate;
            }

            if (this._ionChange) {
              this.popoverController.dismiss({
                item: this.formGruop.controls[this.name]["valueDate"],
              });
              this._ionChange.emit(event);
            }
          
          
          },
        },
      ],
    };

    if (this.type === "datetime" && this.defaultValue) {
      let date = new Date(this.defaultValue);
      date.setDate(date.getDate() + 1);
      this.formGruop.controls[this.name]["valueDate"] = date;
    }
  }

  get Control() {
    console.log("solicitando el control");
    console.log(this.formGruop.controls[this.name].errors);
    return this.formGruop.controls[this.name];
  }

  ExistsError(validator: ValidatorFn) {
    return validator(this.formGruop.controls[this.name]);
  }

  
}
