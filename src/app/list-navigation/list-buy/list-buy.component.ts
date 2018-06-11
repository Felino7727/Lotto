import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TicketsService} from '../../share/service/tickets.service';
import {Tickets} from '../../share/models/tickets.model';

@Component({
  selector: 'anv-list-buy',
  templateUrl: './list-buy.component.html',
  styleUrls: ['./list-buy.component.css']
})
export class ListBuyComponent implements OnInit {

  form:FormGroup;
  data:Tickets;
  constructor(private ticketsService:TicketsService){}

  ngOnInit() {
    this.form=new FormGroup({
      'payeer':new FormControl(null,[Validators.required,Validators.maxLength(7)]),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      //'ticket':new FormControl(null,[Validators.required,Validators.max(7)])
    });

  }
  onBuy(){
    this.data.payeer=this.form.value.payeer;
    this.data.email=this.form.value.email;

    console.log(this.data);

    this.ticketsService.setTickets(this.data).subscribe();
  }

}
