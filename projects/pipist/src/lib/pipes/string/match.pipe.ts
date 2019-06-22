import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'match'
})
export class MatchPipe implements PipeTransform {

  transform(value: string,regex : RegExp): string[] {
    if (!value || !regex) {
      return null;
    }
    return value.match(regex);
  }

}
