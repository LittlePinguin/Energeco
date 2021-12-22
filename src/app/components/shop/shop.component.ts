import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buy(price: number, skin: string){
    var skinName = localStorage.getItem(skin);
    if (skinName == null){
      var coins = Number(localStorage.getItem("coins"));
      if (coins < price){
        alert("Vous n'avez pas assez de pièces pour acheter ce personnage.");
      }
      else{
        var coinsLeft = coins - price;
        localStorage.setItem("coins", coinsLeft.toString());
        localStorage.setItem(skin, "0");
      }
    }
    else if(Number(skinName) == 0){
      if (Number(localStorage.getItem("witch")) == 1){
        localStorage.setItem("witch", "0");
      }
      else if (Number(localStorage.getItem("redbot")) == 1){
        localStorage.setItem("redbot", "0");
      }
      else if (Number(localStorage.getItem("ninja")) == 1){
        localStorage.setItem("ninja", "0");
      }
      else if (Number(localStorage.getItem("knight")) == 1){
        localStorage.setItem("knight", "0");
      }
      else if (Number(localStorage.getItem("hero")) == 1){
        localStorage.setItem("hero", "0");
      }
      else if (Number(localStorage.getItem("perry")) == 1){
        localStorage.setItem("perry", "0");
      }
      else if (Number(localStorage.getItem("yebot")) == 1){
        localStorage.setItem("yebot", "0");
      }
      else if (Number(localStorage.getItem("megalo")) == 1){
        localStorage.setItem("megalo", "0");
      }
      else if (Number(localStorage.getItem("spiderman")) == 1){
        localStorage.setItem("spiderman", "0");
      }
      else if (Number(localStorage.getItem("mystery")) == 1){
        localStorage.setItem("mystery", "0");
      }
      localStorage.setItem(skin, "1");
    }
  }

  getSkin(skin: string): number{
    var skinName = localStorage.getItem(skin);
    if (skinName == null){
      return -1;
    }
    return Number(skinName);
  }

}
