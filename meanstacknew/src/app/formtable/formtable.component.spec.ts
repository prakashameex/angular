import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtableComponent } from './formtable.component';

describe('FormtableComponent', () => {
  let component: FormtableComponent;
  let fixture: ComponentFixture<FormtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
