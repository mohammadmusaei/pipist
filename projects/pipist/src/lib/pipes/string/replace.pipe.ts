import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string, target: string, replacement: string, matchCase: boolean = false): string {
    if (!value) {
      return value;
    }
    let clone = value.slice();
    if(!matchCase){
      clone = clone.toLowerCase();
    }
    return clone.replace(new RegExp(matchCase ? target : target.toLowerCase(), 'g'), replacement);
  }

}
