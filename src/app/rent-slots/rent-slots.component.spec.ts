import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentSlotsComponent } from './rent-slots.component';

describe('RentSlotsComponent', () => {
  let component: RentSlotsComponent;
  let fixture: ComponentFixture<RentSlotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentSlotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
