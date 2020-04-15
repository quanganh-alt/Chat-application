import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessTagComponent } from './mess-tag.component';

describe('MessTagComponent', () => {
  let component: MessTagComponent;
  let fixture: ComponentFixture<MessTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
