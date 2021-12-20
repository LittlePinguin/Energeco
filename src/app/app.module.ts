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

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'mission', component:MissionComponent},
  {path: 'missionTwo', component:MissionTwoComponent},
  {path: 'missionThree', component:MissionThreeComponent},
  {path: 'missionFour', component:MissionFourComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MissionComponent,
    MissionTwoComponent,
    MissionThreeComponent,
    MissionFourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
