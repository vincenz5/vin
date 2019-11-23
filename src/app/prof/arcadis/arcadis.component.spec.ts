import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadisComponent } from './arcadis.component';

describe('ArcadisComponent', () => {
  let component: ArcadisComponent;
  let fixture: ComponentFixture<ArcadisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcadisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcadisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
