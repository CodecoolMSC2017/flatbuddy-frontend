import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementCommentsComponent } from './advertisement-comments.component';

describe('AdvertisementCommentsComponent', () => {
  let component: AdvertisementCommentsComponent;
  let fixture: ComponentFixture<AdvertisementCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
