import { Directive } from "@angular/core";
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from "@angular/forms";
import { createPasswordStrengthValidator } from "../validators/password-strength";

@Directive({
  selector: "[passwordStrength]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthDireactive,
      multi: true,
    },
  ],
})
export class PasswordStrengthDireactive implements Validator {
  validate(control: AbstractControl<any, any>): ValidationErrors {
    return createPasswordStrengthValidator()(control);
  }
}
