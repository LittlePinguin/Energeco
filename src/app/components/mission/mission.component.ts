import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
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

  getAvatar(): string{
    var path = "../../../assets/images/";
    if (Number(localStorage.getItem("witch")) == 1){
      path+="skin-witch.png";
    }
    else if (Number(localStorage.getItem("redbot")) == 1){
      path+="skin-red-bot.png";
    }
    else if (Number(localStorage.getItem("ninja")) == 1){
      path+="skin-ninja.png";
    }
    else if (Number(localStorage.getItem("knight")) == 1){
      path+="skin-knight.png";
    }
    else if (Number(localStorage.getItem("hero")) == 1){
      path+="skin-hero.png";
    }
    else if (Number(localStorage.getItem("perry")) == 1){
      path+="skin-perry.png";
    }
    else if (Number(localStorage.getItem("yebot")) == 1){
      path+="skin-yellow-bot.png";
    }
    else if (Number(localStorage.getItem("megalo")) == 1){
      path+="skin-megalo.png";
    }
    else if (Number(localStorage.getItem("spiderman")) == 1){
      path+="skin-spooder.png";
    }
    else if (Number(localStorage.getItem("mystery")) == 1){
      path+="skin-mystery.png";
    }
    return path;
  }

}
