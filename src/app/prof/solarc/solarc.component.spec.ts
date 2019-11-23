import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarcComponent } from './solarc.component';

describe('SolarcComponent', () => {
  let component: SolarcComponent;
  let fixture: ComponentFixture<SolarcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
