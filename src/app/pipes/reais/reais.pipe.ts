import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reais'
})
export class ReaisPipe implements PipeTransform {

  transform(value: number): string {
    const tratar = String(value);
    return 'R$ ' + tratar.substring(0) + ',00'
  }

}
