import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tickets} from '../models/tickets.model';
import {Injectable} from '@angular/core';



@Injectable()
export class TicketsService {
  constructor(private http:HttpClient){}

  getWinTickets():Observable<Tickets[]>{
    return this.http.get<Tickets[]>('http://localhost:3000/tickets');
  }

  setTickets(ticket:Tickets):Observable<Tickets[]>{
    console.log(ticket);
    return this.http.post<Tickets[]>('http://localhost:3000/tickets',ticket);
  }

}
