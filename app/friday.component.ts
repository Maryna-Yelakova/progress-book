import {Component} from '@angular/core';

import { Subject } from './subject';
// import { SUBJECTS } from './mock-subjects'

@Component({
    selector:'friday',
    template:`
    <h2>Your friday schedule</h2>
    <div class="row">
        <div class="col-sm-4">
            <ul class="list-group users-list">
                <li class="list-group-item"
                *ngFor="let subject of subjects"
                (click)="selectSubject(subject)"
                 [class.active]="subject === activeSubject">
                {{ subject.name }} 
            </li>
          </ul>
        </div>
    </div>
    `
})
export class FridayComponent {
    activeSubject: Subject;
    subjects: Subject[] = [
        { "id":1, "name":"Письмо" },
        { "id":2, "name":"Читання" },
        { "id":3, "name":"Математика" },
        { "id":4, "name":"Англiйська мова" },
        { "id":5, "name":"Природознавство" },
        { "id": 6, "name":"Основи здоров'я" },
        { "id":7, "name":"Малювання"}
    ];

    selectSubject(subject) {
        this.activeSubject = subject;
        console.log(this.activeSubject);
    }
}
