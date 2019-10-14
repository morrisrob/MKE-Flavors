import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FilterPipe',
})

@Injectable()
export class LocationFilterPipe implements PipeTransform {
  transform(value: any, input: string) {
    if (input) {
      input = input;
      return value.filter(function (el: any) {
        return el.toString().indexOf(input) > -1;
      })
    }
    return value;
  }
}