import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentslotseditComponent } from './rentslotsedit.component';

describe('RentslotseditComponent', () => {
  let component: RentslotseditComponent;
  let fixture: ComponentFixture<RentslotseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentslotseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentslotseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
