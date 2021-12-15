import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddUserComponent } from './nuki-design/admin-page/add-user/add-user.component';
import { AdminPageComponent } from './nuki-design/admin-page/admin-page.component';
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
  },
  {
    path: "admin",
    component: AdminPageComponent,
    children: [
      {
        path: "add-user",
        component: AddUserComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
