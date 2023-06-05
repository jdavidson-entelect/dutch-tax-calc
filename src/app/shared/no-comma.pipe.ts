import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'noComma' })
export class NoCommaPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return value?.toString().replace(/,/g, '');
  }
}