import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wrap'
})
export class WrapPipe implements PipeTransform {

  transform(value: string,startWrapper : string , endWrapper : string = null): string {
    return `${startWrapper}${value}${endWrapper || startWrapper}`;
  }

}
