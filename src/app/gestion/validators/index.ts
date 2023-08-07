import { Validators } from "@angular/forms"
import { EFormControlNames } from "src/app/shared/constants/form-control-names"

export namespace GestionValidator {
    export const RegistrarDatosPersonales = {
        [EFormControlNames.NOMBRE]: ['', [
            Validators.minLength(1),
            Validators.maxLength(75),
            Validators.required,
        ]],
        [EFormControlNames.APELLIDO_PATERNO]: ['', [
            Validators.minLength(1),
            Validators.maxLength(75),
            Validators.required,
        ]],
        [EFormControlNames.APELLIDO_MATERNO]: [null, [
            Validators.minLength(1),
            Validators.maxLength(75),
        ]],
        [EFormControlNames.FECHA_NACIMIENTO]: ['', [
            Validators.required,
        ]],
        [EFormControlNames.SEXO]: [null, [
            Validators.minLength(1),
            Validators.maxLength(1),
            Validators.required,
        ]],
        [EFormControlNames.CURP]: ['', [
            Validators.minLength(18),
            Validators.maxLength(18),
            Validators.required,
        ]],
        [EFormControlNames.TELEFONO]: ['', [
            Validators.minLength(10),
            Validators.maxLength(10),
            Validators.required,
        ]],
    }
    
    export const ElegirRol = {
        [EFormControlNames.ROL]: [null, [
            Validators.minLength(1),
            Validators.maxLength(1),
            Validators.required,
        ]],
    }
    
    export const RegistrarDatosMedico = {}
    
    export const RegistrarDatosPaciente = {
        [EFormControlNames.RAZON_ALTA]: ['', [
            Validators.minLength(1),
            Validators.required,
        ]],
    }

    export const ClaveRol = {
        [EFormControlNames.ROL_PASSWORD]: ['', [
          Validators.minLength(8),
          Validators.maxLength(100),
          Validators.required,
        ]]
    }
    
    export const RegistrarCredencialesUsuarioSistema = {
        [EFormControlNames.EMAIL]: ['', [
            Validators.email,
            Validators.required,
        ]],
    }

    export const RegistrarConsultorio = {
        [EFormControlNames.NOMBRE]: ['', [
            Validators.minLength(1),
            Validators.maxLength(20),
            Validators.required,
        ]],
        [EFormControlNames.NOTAS]: [null, [
            Validators.minLength(1),
        ]],
    }

    export const RegistrarEspecialidad = {
        [EFormControlNames.NOMBRE]: ['', [
            Validators.minLength(1),
            Validators.maxLength(100),
            Validators.required,
        ]],
        [EFormControlNames.DESCRIPCION]: [null, [
            Validators.minLength(1),
            Validators.required,
        ]],
        [EFormControlNames.DURACION_SESION]: [10, [
            Validators.min(1),
            Validators.required,
        ]]
    }
}