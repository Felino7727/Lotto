import {Component, OnInit} from '@angular/core';
import {TicketsService} from '../../share/service/tickets.service';
import {Tickets} from '../../share/models/tickets.model';

@Component({
  selector: 'anv-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.css']
})
export class ListHomeComponent implements OnInit {

  constructor(private winnumberService: TicketsService) {
  }

  ticket: any;
  tikets:Tickets;

  onWinNumber() {
    this.winnumberService.getTickets().subscribe(ticket => {
      this.ticket=ticket;//.filter(c => c.id % 3 == 0)
      for (let i in this.ticket){
        this.tikets= this.ticket[i];
        this.winnumberService.setWinTickets(this.tikets).subscribe();
      }
    });
  }

  ngOnInit() {
  }

}
