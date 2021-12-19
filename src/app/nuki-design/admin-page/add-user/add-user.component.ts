import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from 'src/app/app-http-calls/user-data.service';
import { fade } from '../../animations';
import { UserDataService}  from '../../../app-http-calls/user-data.service'
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  animations: [
    fade
  ]
})
export class AddUserComponent implements OnInit {

  addUserFormGroup: FormGroup;

  constructor(
      private fb: FormBuilder, 
      private userDataService: UserDataService,
      private location: Location
     ) {
    this.addUserFormGroup = this.fb.group({
      emailAdress: ["", [Validators.required, Validators.email]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      rnummer: ["", [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  get emailAdress(){
    return this.addUserFormGroup.get("email")
  }

  users!: Observable<Array<UserProfile>>;

  goBack(): void {
    this.location.back()
  }

  postData(): void{
    this.userDataService.addUser(this.addUserFormGroup.value)
    .subscribe(() => this.goBack())
  }

}
