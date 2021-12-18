import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MissionComponent } from './components/mission/mission.component';
import { MissionTwoComponent } from './components/mission-two/mission-two.component';

const appRoutes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'mission', component:MissionComponent},
  {path: 'missionTwo', component:MissionTwoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MissionComponent,
    MissionTwoComponent
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
