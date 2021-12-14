import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { UserProfile } from 'src/app/app-http-calls/user-data.service';
import { fade, staggerFade } from '../animations';


@Component({
  selector: 'app-nuki-reservation',
  templateUrl: './nuki-reservation.component.html',
  styleUrls: ['./nuki-reservation.component.css'],
  animations: [
    fade,
    staggerFade
  ]
})
export class NukiReservationComponent implements OnInit {

  reservationFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.reservationFormGroup = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    })
  }

  ngOnInit(): void {
    this.reservationFormGroup
    .valueChanges
    .subscribe(item => 
      console.log(item as UserProfile))
  }

  get email(){
    return this.reservationFormGroup.get("email")
  }
}
