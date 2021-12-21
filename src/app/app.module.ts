import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MissionComponent } from './components/mission/mission.component';
import { MissionTwoComponent } from './components/mission-two/mission-two.component';
import { MissionThreeComponent } from './components/mission-three/mission-three.component';
import { MissionFourComponent } from './components/mission-four/mission-four.component';
import { MissionFiveComponent } from './components/mission-five/mission-five.component';
import { MissionSixComponent } from './components/mission-six/mission-six.component';
import { MissionSevenComponent } from './components/mission-seven/mission-seven.component';
import { MissionEightComponent } from './components/mission-eight/mission-eight.component';
import { ShopComponent } from './components/shop/shop.component';
import {MatCardModule} from '@angular/material/card';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'mission', component:MissionComponent},
  {path: 'missionTwo', component:MissionTwoComponent},
  {path: 'missionThree', component:MissionThreeComponent},
  {path: 'missionFour', component:MissionFourComponent},
  {path: 'missionFive', component:MissionFiveComponent},
  {path: 'missionSix', component:MissionSixComponent},
  {path: 'missionSeven', component:MissionSevenComponent},
  {path: 'shop', component:ShopComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MissionComponent,
    MissionTwoComponent,
    MissionThreeComponent,
    MissionFourComponent,
    MissionFiveComponent,
    MissionSixComponent,
    MissionSevenComponent,
    MissionEightComponent,
    ShopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
