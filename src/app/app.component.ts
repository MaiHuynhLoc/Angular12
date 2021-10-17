import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  name = "Loc";
  Age = 20;
  resetName(): void {
    this.name = "";
  }
}
