import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NukiToolbarComponent } from './nuki-toolbar/nuki-toolbar.component';
import { NukiReservationComponent } from './nuki-reservation/nuki-reservation.component'

import { MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { UnlockComponent } from './unlock/unlock.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { UserDataService } from '../app-http-calls/user-data.service';
import {  MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    NukiToolbarComponent,
    NukiReservationComponent,
    HomeComponent,
    UnlockComponent,
    AdminPageComponent
  ],
  providers: [
    UserDataService
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
  ],
  exports: [
    NukiToolbarComponent,
    NukiReservationComponent,
    HomeComponent,
    AdminPageComponent
  ]
})
export class NukiDesignModule { }
