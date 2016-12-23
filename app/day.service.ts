import { Injectable } from 'angular2/core';
import { DAYS } from './mock-days';

@Injectable()
export class DayService {
    getDays(){
        return DAYS;
    }
}
