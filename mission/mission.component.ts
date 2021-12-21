import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  // increment coins
  reward(coins: number){
    const currentCoins = localStorage.getItem("coins");
    const final = Number(currentCoins)!+coins;
    localStorage.setItem("coins", final.toString());
  }

}
