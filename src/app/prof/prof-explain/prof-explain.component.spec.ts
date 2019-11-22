import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfExplainComponent } from './prof-explain.component';

describe('ProfExplainComponent', () => {
  let component: ProfExplainComponent;
  let fixture: ComponentFixture<ProfExplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfExplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfExplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
