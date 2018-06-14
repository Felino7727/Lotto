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

      this.ticket=ticket;//ticket.filter(c=>c.win==true);
      console.log(this.ticket)
    });
  }

}




/*<h1 class="center-align">Won</h1>

  <div class="row ">
<div class="input-field col s3">
<input id="first_name" class="validate" [(ngModel)]="Search">
<label class="active" for="first_name">Search Won</label>
</div>
</div>

<div >
<ul class="collection with-header" >
<li class="collection-item" *ngFor="let tiket of ticket | search:Search" >
  <div>{{tiket.payeer}}</div>
</li>
</ul>
</div>*/

