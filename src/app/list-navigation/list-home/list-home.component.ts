import { Component, OnInit } from '@angular/core';
import {TicketsService} from '../../share/service/tickets.service';
import {Winnumber} from '../../share/models/winnumber.model';
import {Tickets} from '../../share/models/tickets.model';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'anv-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent implements OnInit {

  constructor(private winnumberService:TicketsService){}

  a:number;
  ticket:Tickets[];
  buyticket:Winnumber[];
  onWinNumber() {
    this.a=Math.floor(Math.random()*(5-3)+3);
    this.winnumberService.getWinTickets().subscribe(ticket => {
      this.ticket = ticket.filter(c=>c.id%this.a==0);
    });
    
    console.log(this.a);
    console.log(this.ticket);
  }

  ngOnInit() {  }

}
