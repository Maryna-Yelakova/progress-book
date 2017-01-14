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
var core_1 = require('angular2/core');
var day_1 = require('./day');
var DayDetailComponent = (function () {
    function DayDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof day_1.Day !== 'undefined' && day_1.Day) === 'function' && _a) || Object)
    ], DayDetailComponent.prototype, "day", void 0);
    DayDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-day-detail',
            template: "\n        <div *ngIf=\"day\">\n             <h2>{{day.name}}</h2>\n             <div>\n             <label>day: </label>\n             <input [(ngModel)]=\"day.name\" placeholder=\"day\"/>\n             </div>\n         </div>\n         "
        }), 
        __metadata('design:paramtypes', [])
    ], DayDetailComponent);
    return DayDetailComponent;
    var _a;
}());
exports.DayDetailComponent = DayDetailComponent;
//# sourceMappingURL=day-detail.component.js.map