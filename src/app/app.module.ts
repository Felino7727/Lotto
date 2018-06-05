import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ListNavigationModule} from './list-navigation/List-navigation.module';
import {HttpClientModule} from '@angular/common/http';
import {TicketsService} from './share/service/tickets.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListNavigationModule,
    HttpClientModule
  ],
  providers: [TicketsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
