import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListWonComponent} from './list-navigation/list-won/list-won.component';
import {ListBuyComponent} from './list-navigation/list-buy/list-buy.component';
import {ListHomeComponent} from './list-navigation/list-home/list-home.component';

const routes: Routes =[
  {path:'home',component:ListHomeComponent},
  {path:'buy',component:ListBuyComponent},
  {path:'won',component:ListWonComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}
