import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WattwattComponent } from './wattwatt.component';

describe('WattwattComponent', () => {
  let component: WattwattComponent;
  let fixture: ComponentFixture<WattwattComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WattwattComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WattwattComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
