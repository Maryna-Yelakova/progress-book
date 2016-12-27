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
         <a routerLink="/monday">Monday</a>
         <a routerLink="/tuesday">Tuesday</a>
         <a routerLink="/wednesday">Wednesday</a>
         <a routerLink="/thursday">Thursday</a>
         <a routerLink="/friday">Friday</a>
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

