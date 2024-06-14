import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quest2finalComponent } from './quest2final.component';

describe('Quest2finalComponent', () => {
  let component: Quest2finalComponent;
  let fixture: ComponentFixture<Quest2finalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Quest2finalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Quest2finalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
