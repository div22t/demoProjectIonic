import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ques1Component } from './ques1.component';

describe('Ques1Component', () => {
  let component: Ques1Component;
  let fixture: ComponentFixture<Ques1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ques1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ques1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
