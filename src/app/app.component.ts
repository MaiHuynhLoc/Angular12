import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  name = "Loc";
  Age = 15;
  traicay = ["Nho", "Xoai", "Tao"];
  resetName(): void {
    this.name = "";
  }
}
