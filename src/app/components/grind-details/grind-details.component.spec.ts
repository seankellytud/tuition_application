import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindDetailsComponent } from './grind-details.component';

describe('GrindDetailsComponent', () => {
  let component: GrindDetailsComponent;
  let fixture: ComponentFixture<GrindDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrindDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrindDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
