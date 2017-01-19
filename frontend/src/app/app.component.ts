import {Component} from '@angular/core';

// import { Subject } from './subject';



@Component({
    selector:'progress-book',
    template: `
    <header>
      <nav class="navbar navbar-inverse">
        <div class="navbar-header">
          <a href="/" class="navbar-brand">Progress-book</a>
        </div>
      </nav>
    </header>
    <main> 
       <nav>
         <a routerLink="/monday" class="btn btn-default">Monday</a>
         <a routerLink="/tuesday" class="btn btn-primary">Tuesday</a>
         <a routerLink="/wednesday" class="btn btn-success">Wednesday</a>
         <a routerLink="/thursday" class="btn btn-info">Thursday</a>
         <a routerLink="/friday" class="btn btn-warning">Friday</a>
            <router-outlet></router-outlet>
        </nav>
       
    </main>
    <footer class="text-center">
      Copyright &copy; 2016
    </footer>
  `,
})
export  class AppComponent{

}

