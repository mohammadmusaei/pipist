import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unicode'
})
export class UnicodePipe implements PipeTransform {

  transform(value: string, escapePrintable: boolean): string {
    return value.replace(/[\s\S]/g, function (ch) {
      if (!escapePrintable && (/[\x20-\x7E]/).test(ch)) {
        return ch;
      }
      return '\\u' + ('000' + ch.charCodeAt(0).toString(16)).slice(-4);
    });
  }

}
