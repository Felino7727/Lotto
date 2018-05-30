import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationRoutingModule} from './list-navigation-routing.module';

import {ListBuyComponent} from './list-buy/list-buy.component';
import {ListWonComponent} from './list-won/list-won.component';
import {ListHomeComponent} from './list-home/list-home.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [
    ListBuyComponent,
    ListWonComponent,
    ListHomeComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    BrowserModule,
    FormsModule,
  ]
})
export class ListNavigationModule { }
