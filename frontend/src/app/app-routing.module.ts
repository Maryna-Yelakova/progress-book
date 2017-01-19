import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MondayComponent }   from './monday.component';
import { TuesdayComponent }      from './tuesday.component';
import { WednesdayComponent }      from './wednesday.component';
import { ThursdayComponent }      from './thursday.component';
import { FridayComponent }      from './friday.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/monday',
    pathMatch: 'full'
  },
  {
    path: 'monday',
    component: MondayComponent
  },
  {
    path: 'tuesday',
    component: TuesdayComponent
  },
  {
    path: 'wednesday',
    component: WednesdayComponent
  },
  {
    path: 'thursday',
    component: ThursdayComponent
  },
  {
    path: 'friday',
    component: FridayComponent
  }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
