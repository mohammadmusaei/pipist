import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'anchor'
})
export class AnchorPipe implements PipeTransform {

  transform(value: string,name : string = ''): string {
    if(!value) return value;
    return value.anchor(name);
  }

}
