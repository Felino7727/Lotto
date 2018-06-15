import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(ticket, value) {
    return ticket.filter(
      c => c.payeer.includes(value)
    );
  }

}
