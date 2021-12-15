import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserProfile } from 'src/app/app-http-calls/user-data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {
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
      console.log(item as UserProfile))
  }

  get email(){
    return this.addUserFormGroup.get("email")
  }

}
