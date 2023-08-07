import { FormGroup, Validators } from "@angular/forms";

import { EFormControlNames } from "src/app/shared/constants/form-control-names";

export namespace AuthValidator {

    export const Login = {
        [EFormControlNames.EMAIL]: ['', [
            Validators.email,
            Validators.required,
        ]],
        [EFormControlNames.PASSWORD]: ['', [
            Validators.minLength(1),
            Validators.maxLength(100),
            Validators.required,
        ]],
    }
    
    export const RecuperarPassword = {
        [EFormControlNames.EMAIL]: ['', [
            Validators.email,
            Validators.required,
        ]],
    }

    export function ConfirmPasswordValidator(controlName: string, matchingControlName: string) {
        /**Name */
        const confirmedValidator: string = 'confirmedValidator';
        
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors[confirmedValidator]) return;

            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({
                    [confirmedValidator]: 'Las contraseñas no coinciden',
                });
                return;
            }
            matchingControl.setErrors(null);
        }
    }
}