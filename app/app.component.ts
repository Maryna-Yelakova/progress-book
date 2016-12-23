import {Component, OnInit} from 'angular2/core';

import { Day } from './day';
import { DayDetailComponent } from './day-detail.component';
import { DayService } from './day.service';

@Component({
    selector:'progress-book',
    template:`
        <h1>{{title}}</h1>  
        <ul class="days">
            <li *ngFor="#day of days" 
                [class.selected]="day === selectedDay"
                (click)="onSelect(day)">
                <span class="badge">{{day.id}}</span>{{day.name}}
            </li>
        </ul>  
        <my-day-detail [day]="selectedDay"></my-day-detail>  
            `,
    directives:[DayDetailComponent],
    styles: [`
     .selected {
    background-color: #CFD8DC !important;
    color: white;
    }
     .days {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
    }
     .days li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
    }
    .days li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
     }
    .days li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
    }
    .days .text {
    position: relative;
    top: -3px;
    }
    .days .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
    providers: [DayService]
})
export  class AppComponent implements OnInit{
    title = 'Home task';
    selectedDay: Day;
    days: Day[];

    constructor(private _dayService: DayService) {}

    ngOnInit(): void {
       this.getDays();
    }

    getDays() {
        this.days = this._dayService.getDays();
    }

    onSelect(day: Day): void {
        this.selectedDay = day;
    }
}

