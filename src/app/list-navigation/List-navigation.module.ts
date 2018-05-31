import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListBuyComponent} from './list-buy/list-buy.component';
import {ListWonComponent} from './list-won/list-won.component';
import {ListHomeComponent} from './list-home/list-home.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {ListNavigationComponent} from './list-navigation.component';



@NgModule({
  declarations: [
    ListBuyComponent,
    ListWonComponent,
    ListHomeComponent,
    ListNavigationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ]
})
export class ListNavigationModule { }
