import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission-five',
  templateUrl: './mission-five.component.html',
  styleUrls: ['./mission-five.component.css']
})
export class MissionFiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // increment coins and energy
  reward(coins: number, energy: number){
    var currentCoins = localStorage.getItem("coins");
    var finalCoins = Number(currentCoins)!+coins;
    if (finalCoins < 0){
      finalCoins = 0;
    }
    localStorage.setItem("coins", finalCoins.toString());
    
    var currentEnergy = localStorage.getItem("energy");
    var finalEnergy = Number(currentEnergy)+energy;
    if (finalEnergy > 100){
      finalEnergy = 100;
      localStorage.setItem("robot", "1");
    }
    localStorage.setItem("energy", finalEnergy.toString());
  }

}
