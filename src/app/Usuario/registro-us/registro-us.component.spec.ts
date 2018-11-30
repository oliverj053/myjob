import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUsComponent } from './registro-us.component';

describe('RegistroUsComponent', () => {
  let component: RegistroUsComponent;
  let fixture: ComponentFixture<RegistroUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
