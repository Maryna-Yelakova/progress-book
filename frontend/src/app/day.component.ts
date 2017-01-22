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
    activeSubject: Subject;
    subjects = SUBJECTS;

    selectSubject(subject) {
        this.activeSubject = subject;
        console.log(this.activeSubject);
    }

    constructor (private activatedRoute: ActivatedRoute) {}


    ngOnInit () {
        this.activatedRoute.params.subscribe(
            (param: any) => {
                let category = param['category'];
                console.log(category);
            });

       
    }
}
