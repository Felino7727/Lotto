import { Component, OnInit } from '@angular/core';
import {TicketsService} from '../../share/service/tickets.service';
import {Tickets} from '../../share/models/tickets.model';

@Component({
  selector: 'anv-list-won',
  templateUrl: './list-won.component.html',
  styleUrls: ['./list-won.component.css']
})

export class ListWonComponent implements OnInit {


  constructor(
    private womService:TicketsService
  ) { }


  ngOnInit(   ) {
    this.womService.getWinTickets().subscribe((id:Tickets) =>{
      let win = id;
    });
  }


}
