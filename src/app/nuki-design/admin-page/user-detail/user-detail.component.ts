import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserDataService, UserProfile } from 'src/app/app-http-calls/user-data.service';
import {Location} from '@angular/common'
import { fade } from '../../animations';
import { animation } from '@angular/animations';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  animations: [
    fade
  ]
})
export class UserDetailComponent implements OnInit {

  constructor(
    private currentRoute: ActivatedRoute,
    private userService: UserDataService,
    private location: Location
  ) 
  {}

  ngOnInit(): void {
    this.getUser()
  }

  @Input() user?: UserProfile

  goBack(): void {
    this.location.back()
  }

  getUser(): void{
    const id = String(this.currentRoute.snapshot.paramMap.get('id'))
    this.userService.getUser(id)
    .subscribe(user => this.user = user)
  }
}
