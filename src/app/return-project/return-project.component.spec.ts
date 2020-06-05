import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnProjectComponent } from './return-project.component';

describe('ReturnProjectComponent', () => {
  let component: ReturnProjectComponent;
  let fixture: ComponentFixture<ReturnProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
