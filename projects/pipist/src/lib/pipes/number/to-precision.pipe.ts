import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "toPrecision",
})
export class ToPrecision implements PipeTransform {
  transform(value: number, length: number = 1): string {
    if (!value) {
      return value.toString();
    }
    return value.toPrecision(length);
  }
}
