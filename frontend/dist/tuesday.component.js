"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
//import { SUBJECTS } from './mock-subjects'
var TuesdayComponent = (function () {
    function TuesdayComponent() {
        this.subjects = [
            { "id": 1, "name": "Письмо", "hometask": "Type letters(from database)" },
            { "id": 2, "name": "Читання", "hometask": "Read the text(from database)" },
            { "id": 3, "name": "Математика", "hometask": "Count stars(from database)" },
            { "id": 4, "name": "Англiйська мова", "hometask": "Learn words(from database)" },
            { "id": 5, "name": "Природознавство", "hometask": "Feed birds(from database)" },
            { "id": 6, "name": "Основи здоров'я", "hometask": "Eat healthy food(from database)" },
            { "id": 7, "name": "Малювання", "hometask": "Paint your room(from database)" }
        ];
    }
    TuesdayComponent.prototype.selectSubject = function (subject) {
        this.activeSubject = subject;
        console.log(this.activeSubject);
    };
    TuesdayComponent = __decorate([
        core_1.Component({
            selector: 'tuesday',
            templateUrl: './dist/day.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], TuesdayComponent);
    return TuesdayComponent;
}());
exports.TuesdayComponent = TuesdayComponent;
//# sourceMappingURL=tuesday.component.js.map