import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl} from '@angular/forms'

@Component({
  selector: 'app-nuki-reservation',
  templateUrl: './nuki-reservation.component.html',
  styleUrls: ['./nuki-reservation.component.css']
})
export class NukiReservationComponent implements OnInit {

  name: FormControl = this.fb.control("");

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
