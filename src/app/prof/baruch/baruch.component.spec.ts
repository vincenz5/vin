import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaruchComponent } from './baruch.component';

describe('BaruchComponent', () => {
  let component: BaruchComponent;
  let fixture: ComponentFixture<BaruchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaruchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaruchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
