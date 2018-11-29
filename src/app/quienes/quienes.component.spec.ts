import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuienesComponent } from './quienes.component';

describe('QuienesComponent', () => {
  let component: QuienesComponent;
  let fixture: ComponentFixture<QuienesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuienesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuienesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
