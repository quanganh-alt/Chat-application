import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendMessComponent } from './send-mess.component';

describe('SendMessComponent', () => {
  let component: SendMessComponent;
  let fixture: ComponentFixture<SendMessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendMessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendMessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
