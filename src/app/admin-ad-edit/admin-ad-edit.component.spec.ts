import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdEditComponent } from './admin-ad-edit.component';

describe('AdminAdEditComponent', () => {
  let component: AdminAdEditComponent;
  let fixture: ComponentFixture<AdminAdEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAdEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
