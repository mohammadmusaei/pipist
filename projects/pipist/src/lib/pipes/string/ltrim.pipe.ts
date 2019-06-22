import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ltrim'
})
export class LtrimPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    return value.replace(/^\s+/, '');
  }

}
