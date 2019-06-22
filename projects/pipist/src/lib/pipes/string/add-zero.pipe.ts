import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'addZero' })
export class AddZeroPipe implements PipeTransform {
    transform(value: any): string {
        return (value !== 0 && !value || isNaN(value)) ? value : (value.toString().length > 1 ? value.toString() : `0${value}`);
    }
}