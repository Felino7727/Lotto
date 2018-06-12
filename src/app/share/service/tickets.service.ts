import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tickets} from '../models/tickets.model';
import {Injectable} from '@angular/core';
import {Winnumber} from '../models/winnumber.model';



@Injectable()
export class TicketsService {
  constructor(private http:HttpClient){}

  getWinTickets():Observable<Tickets[]>{
    return this.http.get<Tickets[]>('http://localhost:3000/tickets');
  }

  setTickets(ticket:Tickets):Observable<Tickets[]>{
    return this.http.post<Tickets[]>('http://localhost:3000/tickets',ticket);
  }

  updateTickets(ticket:Winnumber):Observable<Winnumber[]>{
    console.log(ticket);
    return this.http.put<Winnumber[]>('http://localhost:3000/tickets',ticket)
  }

}
