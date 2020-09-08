import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "toExponential",
})
export class ToExponential implements PipeTransform {
  transform(value: number, length?: number): string {
    if (!value) {
      return value.toString();
    }
    return value.toExponential(length);
  }
}
