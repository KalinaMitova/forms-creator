import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFormGridPageComponent } from './select-form-grid-page.component';

describe('SelectFormGridPageComponent', () => {
  let component: SelectFormGridPageComponent;
  let fixture: ComponentFixture<SelectFormGridPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFormGridPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFormGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
