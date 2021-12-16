import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from 'src/app/app-http-calls/user-data.service';
import { fade } from '../../animations';
import { UserDataService}  from '../../../app-http-calls/user-data.service'
import { Observable } from 'rxjs';

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

  constructor(private fb: FormBuilder, private userDataService: UserDataService ) {
    this.addUserFormGroup = this.fb.group({
      emailAdress: ["", [Validators.required, Validators.email]],
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      rnummer: ["", [Validators.required]]
    })
   }

  ngOnInit(): void {
    this.addUserFormGroup
    .valueChanges
    .subscribe(item => 
      item as UserProfile)
  }

  get emailAdress(){
    return this.addUserFormGroup.get("email")
  }

  users!: Observable<Array<UserProfile>>;
  
  user!: UserProfile
  postData(): void{
    this.userDataService.save(this.user).subscribe()
  }

}
