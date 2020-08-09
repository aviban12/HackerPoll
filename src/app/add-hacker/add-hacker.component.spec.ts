import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHackerComponent } from './add-hacker.component';

describe('AddHackerComponent', () => {
  let component: AddHackerComponent;
  let fixture: ComponentFixture<AddHackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
