import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wsearch';

  onTerm(term: string) {
    console.log(`thsi is the ${term} from the app`);
  }
}
