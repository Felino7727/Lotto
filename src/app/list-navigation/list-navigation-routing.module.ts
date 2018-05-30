import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListBuyComponent} from './list-buy/list-buy.component';
import {ListHomeComponent} from './list-home/list-home.component';
import {ListWonComponent} from './list-won/list-won.component';

const routes: Routes =[
  {path:'home',component:ListHomeComponent},
  {path:'buy',component:ListBuyComponent},
  {path:'won',component:ListWonComponent}
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class NavigationRoutingModule{}
