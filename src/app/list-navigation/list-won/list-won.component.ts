import {Component, Input, OnInit} from '@angular/core';
import {TicketsService} from '../../share/service/tickets.service';

@Component({
  selector: 'anv-list-won',
  templateUrl: './list-won.component.html',
  styleUrls: ['./list-won.component.css']
})

export class ListWonComponent implements OnInit {

  @Input()
  ticket:any = [];
  Search='';
  constructor(private ticketsService:TicketsService){}

  ngOnInit(){
    this.ticketsService.getWinTickets().subscribe(ticket =>{

      this.ticket=ticket.filter(c=>c.win==true);
      console.log(this.ticket)
    });
  }

}
