import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListNavigationComponent } from './list-navigation/list-navigation.component';
import { ListBuyComponent } from './list-navigation/list-buy/list-buy.component';
import { ListWonComponent } from './list-navigation/list-won/list-won.component';
import { ListHomeComponent } from './list-navigation/list-home/list-home.component';

@NgModule({
  declarations: [
    AppComponent,
    ListNavigationComponent,
    ListBuyComponent,
    ListWonComponent,
    ListHomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
