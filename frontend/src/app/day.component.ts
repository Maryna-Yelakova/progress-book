import {Component, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Subject } from './subject';
import { SUBJECTS } from './mock-subjects'

@Component({
    moduleId: module.id,
    selector:'day',
    templateUrl:'day.component.html'
})
export class DayComponent implements OnInit {
    subject: Subject;
    selectedSubject: Subject;
    subjects = SUBJECTS;


    onSelect (subject: Subject){
        this.selectedSubject = subject;
    }


    constructor (private activatedRoute: ActivatedRoute) {}
    public title: any;

    ngOnInit () {
        this.activatedRoute.params.subscribe(
            (param: any) => {
                let category = param['category'];
                this.title = category;

            });

       
    }
}
