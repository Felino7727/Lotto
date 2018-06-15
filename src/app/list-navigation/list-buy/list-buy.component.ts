import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TicketsService} from '../../share/service/tickets.service';
import {Tickets} from '../../share/models/tickets.model';

@Component({
  selector: 'anv-list-buy',
  templateUrl: './list-buy.component.html',
  styleUrls: ['./list-buy.component.css']
})
export class ListBuyComponent implements OnInit {

  form: FormGroup;
  data: Tickets;

  constructor(private ticketsService: TicketsService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'payeer': new FormControl(null, [Validators.required, Validators.maxLength(7)]),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });

  }

  onBuy() {
    //this.ticketsService.getPayeerApi();
    //console.log(this.ticketsService.getPayeerApi());
    this.data = new Tickets(
      this.form.value.email,
      this.form.value.payeer
    );

    this.ticketsService.setTickets(this.data).subscribe();

    this.form = new FormGroup({
      'payeer': new FormControl(null, [Validators.required, Validators.maxLength(7)]),
      'email': new FormControl(null, [Validators.required, Validators.email])
    });
  }

}
