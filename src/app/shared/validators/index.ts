import { FormGroup } from "@angular/forms";

export namespace CustomValidator {
    
    export function SelectValueValidator(controlName: string, validatorName: string, msg: string) {
        const selectedValidator: string = validatorName;


        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];

            if (control.value === null || !control.value.length || control.value === "null") {
                control.setErrors({
                    [selectedValidator]: msg,
                });
                return;
            }
            control.setErrors(null);
        }
    }

    export function ConfirmPasswordValidator(controlName: string, matchingControlName: string, validatorName: string) {
        const confirmedValidator: string = validatorName;
        
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