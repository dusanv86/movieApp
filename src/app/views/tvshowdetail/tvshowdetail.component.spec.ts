import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVshowdetailComponent } from './tvshowdetail.component';

describe('DetailComponent', () => {
  let component: TVshowdetailComponent;
  let fixture: ComponentFixture<TVshowdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVshowdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TVshowdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
