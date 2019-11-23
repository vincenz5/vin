import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DexgridComponent } from './dexgrid.component';

describe('DexgridComponent', () => {
  let component: DexgridComponent;
  let fixture: ComponentFixture<DexgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DexgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DexgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
