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
