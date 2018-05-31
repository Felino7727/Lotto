import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {Observable} from 'rxjs';
import {Tickets} from '../models/tickets.model';
import {map} from 'rxjs/operators';



@Inject
export class TicketsService {
  constructor(private http:HttpClient){}

  getWinTickets():Observable<Tickets>{
    return this.http.get('http://localhost:3000/tickets')
      .pipe(map((response:any)=>response.json()));
  }

  setTickets(ticket:Tickets):Observable<Tickets>{
    return this.http.put('http://localhost:3000/tickets',ticket)
      .pipe(map((response:any)=>response.json()))
  }

}
