import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullableData'
})
export class NullableDataPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === null) return "Sin datos";

    return value;
  }
}
