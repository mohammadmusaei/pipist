import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    if (!value) {
      return value;
    }
    let clone = value.slice();
    for (let i = 0; i < args.length; i++) {
      clone = clone.replace(new RegExp(`#${i}`, 'g'), args[i]);
    }
    return clone;
  }

}
