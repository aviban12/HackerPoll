import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhackerComponent } from './showhacker.component';

describe('ShowhackerComponent', () => {
  let component: ShowhackerComponent;
  let fixture: ComponentFixture<ShowhackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowhackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowhackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
