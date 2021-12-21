import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var energy = Number(localStorage.getItem("energy"));
    if (energy == null){
      localStorage.setItem("energy", "50");
      energy = 50;
    }
    if (energy < 30){
      document.getElementById("elevel")!.style.backgroundColor= "red"
    }
    else if (energy < 60){
      document.getElementById("elevel")!.style.backgroundColor= "orange"
    }
    else if (energy == 100){
      document.getElementById("elevel")!.style.backgroundColor= "lightgreen"
    }
    else{
      document.getElementById("elevel")!.style.backgroundColor= "green"
    }
    document.getElementById("elevel")!.style.width = energy.toString()+"px";
  }

  refresh(){
    this.ngOnInit();
  }

  getCoins(): string{
    return localStorage.getItem("coins")!;
  }

  getAvatar(): string {
    return localStorage.getItem("avatar") ?? 'coinBooster.png';
  }
}
