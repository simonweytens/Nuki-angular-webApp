import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './nuki-design/home/home.component';
import { NukiReservationComponent } from './nuki-design/nuki-reservation/nuki-reservation.component';
import { UnlockComponent } from './nuki-design/unlock/unlock.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "reservation",
    component: NukiReservationComponent
  },
  {
    path: "unlock",
    component: UnlockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
