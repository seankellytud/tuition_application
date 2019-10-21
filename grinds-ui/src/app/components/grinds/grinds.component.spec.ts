import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindsComponent } from './grinds.component';

describe('GrindsComponent', () => {
  let component: GrindsComponent;
  let fixture: ComponentFixture<GrindsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrindsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
