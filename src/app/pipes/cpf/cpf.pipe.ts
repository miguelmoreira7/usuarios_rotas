import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(valor: String): String {
    // 000.000.000-00
    if (valor.length == 11) {
      return valor.substring(0,3)
      + '.' + valor.substring(3,6)
      + '.' + valor.substring(6,9)
      + '-' + valor.substring(9);
    }
    return valor;
  }

}
