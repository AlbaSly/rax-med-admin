import { IPersonas } from "../interfaces";

export namespace APIUtils {
    export function getFullName(persona: IPersonas): string {
        return (persona.nombre + ' ' + persona.apellidoPaterno + (persona.apellidoMaterno ? ' ' + persona.apellidoMaterno : '')).toUpperCase();
    }
}