import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  loginname = "sda"
  public counter = 2;
  public counterBinhPhuong = 0;
  constructor(private common:CommonService) { }

  ngOnInit(): void {
    this.counterBinhPhuong = this.common.binhPhuong(this.counter);
  }

}
