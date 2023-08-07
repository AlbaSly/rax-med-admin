import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'estado'
})
export class EstadoPipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        if (Boolean(value)) return 'Activo';
        if (!Boolean(value)) return 'Inactivo';

        return value;
    }
}