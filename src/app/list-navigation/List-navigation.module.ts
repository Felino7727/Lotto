import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListBuyComponent} from './list-buy/list-buy.component';
import {ListWonComponent} from './list-won/list-won.component';
import {ListHomeComponent} from './list-home/list-home.component';
import {BrowserModule} from '@angular/platform-browser';
import {ListNavigationComponent} from './list-navigation.component';
import {ShareModule} from '../share/share.module';



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
    ShareModule
  ]
})
export class ListNavigationModule { }
