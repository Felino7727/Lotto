import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListBuyComponent} from './list-buy/list-buy.component';
import {ListWonComponent} from './list-won/list-won.component';
import {ListHomeComponent} from './list-home/list-home.component';
import {ListNavigationComponent} from './list-navigation.component';
import {NavigationRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    ListNavigationComponent,
    ListBuyComponent,
    ListWonComponent,
    ListHomeComponent
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule
  ]
})
export class ListNavigationModule { }
