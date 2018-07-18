import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAdDetailsComponent } from './rent-ad-details.component';

describe('RentAdDetailsComponent', () => {
  let component: RentAdDetailsComponent;
  let fixture: ComponentFixture<RentAdDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentAdDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentAdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
