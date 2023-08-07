import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'genero',
})
export class GeneroPipe implements PipeTransform {
    transform(value: any, ...args: any[]): string {
        if (value === "H") return 'Hombre';
        if (value === "M") return 'Mujer';

        return value;
    }
}