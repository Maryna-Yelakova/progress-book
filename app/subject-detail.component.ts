import { Component} from '@angular/core';

//import { Subject } from './subject';

@Component({
    selector: 'my-day-detail',
    template: `
        <div *ngIf="subject">
           <div class="col-sm-8">
               <div>
                   <h1>Issues</h1> 
                   <p>{{ task }}</p>
               </div>
               </div>
            </div>
        </div>
         `
})
export class SubjectDetailComponent {
    task = "hometask from db";

}