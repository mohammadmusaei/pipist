import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "toFixed",
})
export class ToFixed implements PipeTransform {
  transform(value: number, length: number = 0): string {
    if (!value) {
      return value.toString();
    }
    return value.toFixed(length);
  }
}
