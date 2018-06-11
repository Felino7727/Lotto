import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tickets} from '../models/tickets.model';
import { map} from 'rxjs/operators';
import {Injectable} from '@angular/core';



@Injectable()
export class TicketsService {
  constructor(private http:HttpClient){}

  getWinTickets():Observable<Tickets[]>{
    return this.http.get<Tickets[]>('http://localhost:3000/tickets');
  }

  setTickets(ticket:Tickets):Observable<Tickets[]>{
    return this.http.put('http://localhost:3000/tickets',ticket)
      .pipe(map((response:any)=>response.json()))
  }

}
