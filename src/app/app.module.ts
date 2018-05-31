import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {ListNavigationModule} from './list-navigation/List-navigation.module';
import {HttpClientModule} from '@angular/common/http';



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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
