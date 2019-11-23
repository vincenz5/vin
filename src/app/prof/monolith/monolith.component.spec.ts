import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonolithComponent } from './monolith.component';

describe('MonolithComponent', () => {
  let component: MonolithComponent;
  let fixture: ComponentFixture<MonolithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonolithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonolithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
