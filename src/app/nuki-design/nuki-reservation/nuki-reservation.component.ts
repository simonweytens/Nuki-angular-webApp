import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { UserProfile } from 'src/app/app-http-calls/user-data.service';
import { fade, staggerFade } from '../animations';
import { UserDataService } from 'src/app/app-http-calls/user-data.service';


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

  constructor(private fb: FormBuilder, private userService: UserDataService) { 
    this.reservationFormGroup = this.fb.group({
      email: ["", [Validators.required, Validators.email]]
    })
  }

  users!: UserProfile[];
  emailarray! : string[];

  ngOnInit(): void {
    this.reservationFormGroup
    .valueChanges
    .subscribe(item => {
      console.log(item)
      this.userService.getUsers()
      .subscribe(users => {
      this.users = users
      for (let i = 0; i < users.length; i++) {
        if(users[i].emailAdress == (item.email)){console.log("EXISTS")}
      }
    })
    })
  }

  get email(){
    return this.reservationFormGroup.get("email")
  }
}
