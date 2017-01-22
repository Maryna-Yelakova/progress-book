import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayComponent }   from './day.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'day/monday',
    pathMatch: 'full'
  },
  {
    path: 'day/:category',
    component: DayComponent
  }
  
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
