import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rtrim'
})
export class RtrimPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    return value.replace(/ +$/,'');
  }

}