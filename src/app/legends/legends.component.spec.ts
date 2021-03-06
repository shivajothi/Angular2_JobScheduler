import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendsComponent } from './legends.component';

describe('LegendsComponent', () => {
  let component: LegendsComponent;
  let fixture: ComponentFixture<LegendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
