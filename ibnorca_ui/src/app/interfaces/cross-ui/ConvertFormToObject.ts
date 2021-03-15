import { FormGroup } from "@angular/forms";

export class ConvertFormToObject {
  static convert(formGroup: FormGroup, customObject: Object) {
    for (const prop in formGroup.controls) {
      customObject[prop] = formGroup.controls[prop]["valueDate"]
        ? formGroup.controls[prop]["valueDate"]
        : formGroup.controls[prop].value;
    }
  }
}

export class ConvertObjectToForm {
  static convert(formGroup: FormGroup, customObject: Object) {
    for (const prop in formGroup.controls) {
      if(customObject[prop] instanceof Date){
        formGroup.controls[prop]["valueDate"] = customObject[prop];
      }
      else{
        formGroup.controls[prop].setValue(customObject[prop]);
      }
    }
  }
}