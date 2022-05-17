import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  Form,
  FormControl,
  FormGroup,
  NgForm,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { IonDatetime, PopoverController } from '@ionic/angular';

import { ValidationControl } from 'src/app/interfaces/cross-ui/ValidationControl';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
})
export class CustomInputComponent implements OnInit {
  @Input() readonly = false;
  @Input() label: string;
  @Input() name: string;
  @Input() type: string;
  @Input() formGruop: FormGroup;
  @Input() Validations: ValidationControl[];
  @Input() form: NgForm;
  @Input() defaultValue: any;
  @Output() _ionChange = new EventEmitter();
  customPickerOption: any;
  customDate = new Date();
  currentDate = new Date();
  @Input() formatDate = 'date';
  @Input() maxDate = this.currentDate.getUTCFullYear() + 10;
  @Output() eventKeyEnterEmiiter = new EventEmitter<any>();

  constructor(private popoverController: PopoverController) {
    console.log('maxDate', this.maxDate);
  }

  ngOnInit() {
    if (this.formGruop && !this.formGruop.get(this.name)) {
      this.formGruop.addControl(this.name, new FormControl(this.defaultValue));
      const validators: ValidatorFn[] = [];
      if (this.Validations) {
        for (const val of this.Validations) {
          validators.push(val.validator);
        }
        this.formGruop.controls[this.name].setValidators(validators);
      }
    }

    if (this.type === 'datetime' && this.defaultValue) {
      const date = new Date(this.defaultValue);
      date.setDate(date.getDate() + 1);
      this.formGruop.controls[this.name]['valueDate'] = date;
    } else if (this.type === 'datetime' && !this.defaultValue) {
      const date = (this.defaultValue = new Date());
      date.setDate(date.getDate() + 1);
      this.formGruop.controls[this.name]['valueDate'] = date;
    }
  }

  get Control() {
    console.log('solicitando el control');
    console.log(this.formGruop.controls[this.name].errors);
    return this.formGruop.controls[this.name];
  }

  ExistsError(validator: ValidatorFn) {
    return validator(this.formGruop.controls[this.name]);
  }

  eventKeyEnter(event) {
    if (this.popoverController) {
      this.popoverController.dismiss({
        item: this.formGruop.controls[this.name]['value'],
      });
    }
    if (this.eventKeyEnterEmiiter) {
      this.eventKeyEnterEmiiter.emit(event);
    }
  }

  selectionarFecha(event) {
    const dateSelect = new Date(event.detail.value);
    if (this.popoverController) {
      this.popoverController.dismiss({
        item: dateSelect,
      });
    }
    if (this.eventKeyEnterEmiiter) {
      this.eventKeyEnterEmiiter.emit(dateSelect);
    }
  }
}
