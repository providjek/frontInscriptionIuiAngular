import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end-inscription-iui';
  routeParams;

  constructor(private route: ActivatedRoute) {
    this.routeParams = this.route.snapshot.params;
  }

}
