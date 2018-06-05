import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TicketsService} from '../../share/service/tickets.service';

@Component({
  selector: 'anv-list-buy',
  templateUrl: './list-buy.component.html',
  styleUrls: ['./list-buy.component.css']
})
export class ListBuyComponent implements OnInit {

  form:FormGroup;
  constructor(
    private buyService:TicketsService
  ) { }

  ngOnInit() {
    this.form=new FormGroup({
      'payeer':new FormControl(null,[Validators.required,Validators.maxLength(7)]),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      //'ticket':new FormControl(null,[Validators.required,Validators.max(7)])
    });

  }
  onSubmit(){
    const Tiket = this.form.value;
    this.buyService.setTickets(Tiket);
    console.log(Tiket);
  }

}
