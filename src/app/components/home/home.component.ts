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

    if (Number(localStorage.getItem("witch")) != 1){
      if (Number(localStorage.getItem("redbot")) != 1){
        if (Number(localStorage.getItem("ninja")) != 1){
          if (Number(localStorage.getItem("knight")) != 1){
            if (Number(localStorage.getItem("hero")) != 1){
              if (Number(localStorage.getItem("perry")) != 1){
                if (Number(localStorage.getItem("yebot")) != 1){
                  if (Number(localStorage.getItem("megalo")) != 1){
                    if (Number(localStorage.getItem("spiderman")) != 1){
                      localStorage.setItem("redbot", "1");
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

}
