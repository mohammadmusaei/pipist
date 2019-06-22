import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'leftPad'
})
export class LeftPadPipe implements PipeTransform {

  transform(value : string, minLen : number, ch : string = ' ') : string {
    if (!value) {
      return value;
    }
    return ((value.length < minLen) ? (new Array((minLen - value.length) + 1)).join(value) + value : value);
  }

}
