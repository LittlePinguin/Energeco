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

  butAvater(price: number, avatar: string): void {
    let coin: number = Number(localStorage.getItem("coins")!);
    if (coin >= price) {
      localStorage.setItem('avatar', avatar);
      localStorage.setItem("coins", String(coin - price))
    }
    else {
      alert("Vous n'avez pas assez d'argent pour acheter cet avatar");
    }
  }
}
