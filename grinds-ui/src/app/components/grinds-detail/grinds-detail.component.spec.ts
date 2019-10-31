import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindsDetailComponent } from './grinds-detail.component';

describe('GrindsDetailComponent', () => {
  let component: GrindsDetailComponent;
  let fixture: ComponentFixture<GrindsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrindsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrindsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
