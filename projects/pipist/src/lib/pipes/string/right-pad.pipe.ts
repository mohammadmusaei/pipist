import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rightPad'
})
export class RightPadPipe implements PipeTransform {

  transform(value: string, len: number, fill: string): string {
    if (!value) {
      return value;
    }
    return value.padEnd(len, fill);
  }

}
