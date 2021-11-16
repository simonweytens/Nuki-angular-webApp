import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NukiToolbarComponent } from './nuki-toolbar.component';

describe('NukiToolbarComponent', () => {
  let component: NukiToolbarComponent;
  let fixture: ComponentFixture<NukiToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NukiToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NukiToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
