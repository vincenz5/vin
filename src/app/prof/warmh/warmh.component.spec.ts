import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarmhComponent } from './warmh.component';

describe('WarmhComponent', () => {
  let component: WarmhComponent;
  let fixture: ComponentFixture<WarmhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarmhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarmhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
