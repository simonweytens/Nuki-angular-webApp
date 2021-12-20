import { Component, OnInit } from '@angular/core';
import { UserDataService, UserProfile } from 'src/app/app-http-calls/user-data.service';
import { Location } from '@angular/common';
import { fade } from '../../animations';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css'],
  animations: [
    fade
  ]
})
export class ListViewComponent implements OnInit {

  displayedColumns = [  'firstName', 'lastName', 'emailAdress','rnummer']

  constructor(
    private userDataService: UserDataService,
    private location: Location
    ) { }

  users!: UserProfile[];

  ngOnInit(): void {
    this.getUsers()
  }

  goBack(): void {
    this.location.back()
  }

  getUsers(): void{
    this.userDataService.getUsers()
      .subscribe(users => this.users = users)
  }

}
