import { FormGroup } from "@angular/forms";

export namespace ReactiveFormsUtils {
    
    export function getControlsAndTheirValues(formGroup: FormGroup<any>) {
        const controls = formGroup.controls;

        const mapped: any = {};
        
        Object.keys(controls).forEach(key => {
            mapped[key] = controls[key].value;
        });

        return mapped;
    }
}