import { Component, Input } from 'angular2/core';

import { Day } from './day';

@Component({
    selector: 'my-day-detail',
    template: `
        <div *ngIf="day">
             <h2>{{day.name}}</h2>
             <div>
             <label>day: </label>
             <input [(ngModel)]="day.name" placeholder="day"/>
             </div>
         </div>
         `

})
export class DayDetailComponent {
    @Input()
    day: Day;
}