import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ques2Component } from './ques2.component';

describe('Ques2Component', () => {
  let component: Ques2Component;
  let fixture: ComponentFixture<Ques2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ques2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ques2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
