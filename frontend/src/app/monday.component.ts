import {Component} from '@angular/core';

import { Subject } from './subject';
//import { SUBJECTS } from './mock-subjects'

@Component({
    moduleId: module.id,
    selector:'monday',
    templateUrl:'day.component.html'
})
export class MondayComponent {
    day:"Moday";
    subject: Subject;
    activeSubject: Subject;
    subjects: Subject[] = [
        { "id":1, "name":"Письмо", "hometask":"Type letters(from database)" },
        { "id":2, "name":"Читання", "hometask":"Read the text(from database)" },
        { "id":3, "name":"Математика", "hometask":"Count stars(from database)" },
        { "id":4, "name":"Англiйська мова", "hometask":"Learn words(from database)" },
        { "id":5, "name":"Природознавство", "hometask":"Feed birds(from database)"},
        { "id": 6, "name":"Основи здоров'я","hometask":"Eat healthy food(from database)" },
        { "id":7, "name":"Малювання", "hometask":"Paint your room(from database)"}
    ];

    selectSubject(subject) {
        this.activeSubject = subject;
        console.log(this.activeSubject);
    }
}
