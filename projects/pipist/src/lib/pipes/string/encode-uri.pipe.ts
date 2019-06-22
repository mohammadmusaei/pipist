import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encodeURI'
})
export class EncodeURIPipe implements PipeTransform {

  transform(value: string): string {
    return encodeURI(value);
  }

}
