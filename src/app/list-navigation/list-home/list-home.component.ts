import {Component, OnInit} from '@angular/core';
import {TicketsService} from '../../share/service/tickets.service';
import {Tickets} from '../../share/models/tickets.model';

@Component({
  selector: 'anv-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent implements OnInit {

  ticket: any;
  tikets: Tickets;
  jackpot:number;

  constructor(private winnumberService: TicketsService) {
  }

  onWinNumber() {
    this.winnumberService.getTickets().subscribe(ticket => {
      this.ticket = ticket;//.filter(c => c.id % 3 == 0)
      for (let i in this.ticket) {
        this.tikets = this.ticket[i];
        i = i + 3;
        this.winnumberService.setWinTickets(this.tikets).subscribe();
      }
    });
  }

  ngOnInit() {
    this.winnumberService.getTickets().subscribe(ticket=>{
      this.ticket=ticket;
      this.jackpot=Math.trunc(((ticket.length/100)*10)*5);
    })
  }

}
