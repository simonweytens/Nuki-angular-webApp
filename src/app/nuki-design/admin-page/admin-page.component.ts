import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from 'src/app/app-http-calls/user-data.service';
import { UserDataService}  from '../../app-http-calls/user-data.service'

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private userDataService: UserDataService) { }

  users!: Observable<Array<UserProfile>>;

  ngOnInit(): void {
    this.users = this.userDataService.getUsers();
  }

}
