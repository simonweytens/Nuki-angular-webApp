import { Component, OnInit } from '@angular/core';
import { fade } from '../animations';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
  animations:[
    fade
  ]
})
export class AdminPageComponent implements OnInit {


  constructor() { }


  ngOnInit(): void {

  }



}
