import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wsearch';
  pages = [];

  constructor(private wikipedia: WikipediaService) { }

  onTerm(term: string) {

    /*
    this.wikipedia.search(term) -> retrieves an observable
    and that observable is gonna start to emit events as soon as it retrieves some data
    from the wikipedia api.
    .subscribe((response: any) => {...} )-> we call subscribe on it and
    pass the observer -> (response: any) => {this.pages = response.query.search;} -> this function
    is going to be called whenever our observable emits some value.
    */
    this.wikipedia.search(term).subscribe((pages) => {
      this.pages = pages;
    })
  }
}
