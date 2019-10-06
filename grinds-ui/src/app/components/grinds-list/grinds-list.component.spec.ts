import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindsListComponent } from './grinds-list.component';

describe('GrindsListComponent', () => {
  let component: GrindsListComponent;
  let fixture: ComponentFixture<GrindsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrindsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrindsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
