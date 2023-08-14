import { FormGroup, Validators } from "@angular/forms";

import { EFormControlNames } from "src/app/shared/constants/form-control-names";

export namespace MedicosValidator {

    export const Editar = {
        [EFormControlNames.HORA_ENTRADA]: [null, [
            Validators.required,
        ]],
        [EFormControlNames.HORA_SALIDA]: [null, [
            Validators.required,
        ]],
    }
}