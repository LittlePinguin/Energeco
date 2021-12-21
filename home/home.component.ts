import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem("coins")===null) {
      localStorage.setItem("coins","0");
    }
    if (localStorage.getItem("energy")===null) {
      localStorage.setItem("energy","5");
    }
  }

}
