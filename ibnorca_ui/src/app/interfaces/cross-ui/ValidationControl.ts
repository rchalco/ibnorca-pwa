import { ValidatorFn, Validators } from "@angular/forms";

export class ValidationControl {
  constructor(_validator: ValidatorFn, _message: string) {
    this.validator = _validator;
    this.message = _message;
  }
  validator: ValidatorFn;
  message: string;
}
