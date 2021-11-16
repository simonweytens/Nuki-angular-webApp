import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NukiReservationComponent } from './nuki-reservation.component';

describe('NukiReservationComponent', () => {
  let component: NukiReservationComponent;
  let fixture: ComponentFixture<NukiReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NukiReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NukiReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
