import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './nuki-design/home/home.component';
import { NukiReservationComponent } from './nuki-design/nuki-reservation/nuki-reservation.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "reservation",
    component: NukiReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
