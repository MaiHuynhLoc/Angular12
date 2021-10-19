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
  traicay1 = [{ten:"Nho", gia:12, daihagia:false},{ten:"Xoai", gia:3, daihagia:true},{ten:"Tao", gia:-123, daihagia:false}]
  resetName(): void {
    this.name = "";
  }
  cities = [{city: "An Giang", district: []}];
  ngOnInit() : void {
    console.log(this.cities);
  }
}
