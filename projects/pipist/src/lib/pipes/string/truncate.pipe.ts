import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, len: number, fill: string): string {
    if (!value) {
      return value;
    }
    return value.padStart(len, fill);
  }

}
