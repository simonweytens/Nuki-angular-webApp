import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,  Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserDataService, UserProfile } from 'src/app/app-http-calls/user-data.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(
    private currentRoute: ActivatedRoute,
    private router: Router,
    private userService: UserDataService,
    //private location: Location
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart)
    ).subscribe(
      (event: NavigationEvent) => {
        this.getUser()
        console.log(event)
      }
    )
   }

  ngOnInit(): void {
    this.getUser()
  }

  @Input() user?: UserProfile

  //TODO GO BACK

  getUser(): void{
    const id = String(this.currentRoute.snapshot.paramMap.get('id'))
    this.userService.getUser(id)
    .subscribe(user => this.user = user)
  }
}
